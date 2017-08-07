export function createAction(type: string, payloadMapper: any) {
  const scopedName = this.scope ? `${this.scope}/` : '';
  const name = `app/${scopedName}${type}`;

  function actionCreator(...args) {
    return {
      type: name,
      payload: payloadMapper ? payloadMapper(...args) : args[0]
    };
  }

  actionCreator.toString = () => name;
  actionCreator.bind({ displayName: name });

  return actionCreator;
}

export const scopedCreator: any = (scopeName) => createAction.bind({ scope: scopeName });
