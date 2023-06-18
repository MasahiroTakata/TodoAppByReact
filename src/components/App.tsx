import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

const SButton = styled.button`
  margin-left: 16px;
`;

export const App: FC = () => {
  // カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  const [text, setText] = useState<string>("");

  // テキストが入力されたら、入力内容をstateに設定する
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  // 追加ボタン押下時
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };
  // 削除ボタン押下時
  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};
