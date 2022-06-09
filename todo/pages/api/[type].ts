// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TodoType } from '../../types/TodoTypes';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoType>
) {
  const obj = {
    Todolist: [
      {
        id: 1,
        text: '할일 1',
        checked: true,
      },
      {
        id: 2,
        text: '할일 2',
        checked: false,
      },
      {
        id: 3,
        text: '할일 3',
        checked: true,
      },
    ],
  };
  res.status(200).json(obj);
}
