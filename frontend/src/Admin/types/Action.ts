import { Admin, Message } from './types';

type Action = { type: 'VERIFICATION'; payload: Admin | Message };

export default Action;
