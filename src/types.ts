
export type CountType = {
    createdCount: number,
    concludedCount: number,
};

// export type CountType = {
//     createdCount: number,
//     concludedCount: number,
// } & typeof defaultCountType;

// const defaultCountType = {
//     createdCount: 1,
//     concludedCount: 1,
// };

export type SearchType = {
    onClick: (text: string) => void

    //onClick: () => void
    //onClick: (text: string) => void
    //onClick() : void
    //onClick(text: string) : void
};

export type TaskItemType = {
    id: number,
    description: string,
    concluded: boolean,
    onCheck: (id: number, description: string, isChecked: boolean) => void,
    onDelete: (id: number, description: string) => void,
};