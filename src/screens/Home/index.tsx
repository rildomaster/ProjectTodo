import { useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Counters } from '../../components/Counters';
import { ContentEmpty } from '../../components/ContentEmpty';
import { TaskItem } from '../../components/TaskItem';

import { CountType, TaskItemType } from "../../types";


export function Home() {

    const [counts, setCounts] = useState<CountType>({ createdCount: 0, concludedCount: 0 });
    const [tasks, setTasks] = useState<TaskItemType[]>([]);

    useEffect(() => showCounts(), [tasks]);
  
    function showCounts() {

        const tasksCreated = tasks.filter(task => task.concluded === false);
        const tasksConcluded = tasks.filter(task => task.concluded === true);

        setCounts({ createdCount: tasksCreated.length, concludedCount: tasksConcluded.length });
    }

    function handleAddTask(description: string) {

        if(!description){
            return Alert.alert('Tarefa', 'Informe a descrição da tarefa!!');
        }

        const taskExist = tasks.filter(task => task.description === description)
        if(taskExist.length > 0) {
            return Alert.alert('Tarefa', `A tarefa '${description}' já existe na sua lista!!`);
        }
        
        //const newId = (tasks?.at(-1)?.id ?? 0) + 1;
        const newId = (tasks[tasks.length-1]?.id ?? 0) + 1;
        const newTask = {
            id: newId,
            description: description,
            concluded: false
        } as TaskItemType

        setTasks(prevEvent => [...prevEvent, newTask ]);
    }


    function handleDeleteTaskConfirm(id: number, description: string) {
        Alert.alert('Tarefa', `Deseja realmente deletar essa tarefa?\n'${description}'`,[
            { text: 'Sim', onPress: () => deleteTask(id) },
            { text: 'Não', style: 'cancel' }
        ]);
    }

    function deleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }


    function handleConcludedTask(id: number, description: string, isChecked: boolean) {
        const index = tasks.findIndex(task => task.id === id);
        const currentTasks = [...tasks];
        currentTasks[index].concluded = isChecked;
        setTasks(currentTasks); 
    }
  
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Search onClick={handleAddTask} />
                <Counters 
                    createdCount={counts.createdCount} 
                    concludedCount={counts.concludedCount} 
                />

                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={ false }
                    data={tasks}
                    keyExtractor={ item => item.id.toString() }
                    renderItem={({ item }) => (
                        <TaskItem 
                            id={item.id}
                            description={item.description}
                            concluded={item.concluded}
                            onCheck={handleConcludedTask}
                            onDelete={handleDeleteTaskConfirm}
                        />
                    )}
                    ListEmptyComponent={(
                        <ContentEmpty />
                    )}
                />
            </View>
        </View>
    );
}