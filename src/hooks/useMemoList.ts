import { useCallback, useState } from "react";

export const useMemoList = () => {
  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);
  // メモ追加ロジック
  const addTodo = useCallback(
    (text: string) => {
      const newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );
  const onClickDelete = useCallback(
    (index: number) => {
      const newMemos = [...memos]; // 配列の宣言
      newMemos.splice(index, 1); // 第一引数は、削除する要素番号、第二引数は削除する要素の数
      setMemos(newMemos);
    },
    [memos]
  );
  return { memos, addTodo, onClickDelete };
};
