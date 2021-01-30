/**
 * Интерфейс ошибки
 */
export interface IError {
  title: string;
  description: string;

}

/**
 * Ошибка с отображением
 */
export interface IErrorWithState extends IError {
   isActive: boolean;
}
