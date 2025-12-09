declare module '@apiverve/variablenameconverter' {
  export interface variablenameconverterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface variablenameconverterResponse {
    status: string;
    error: string | null;
    data: VariableNameConverterData;
    code?: number;
  }


  interface VariableNameConverterData {
      results:      Result[];
      count:        number;
      targetFormat: string;
  }
  
  interface Result {
      original:  string;
      converted: string;
  }

  export default class variablenameconverterWrapper {
    constructor(options: variablenameconverterOptions);

    execute(callback: (error: any, data: variablenameconverterResponse | null) => void): Promise<variablenameconverterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: variablenameconverterResponse | null) => void): Promise<variablenameconverterResponse>;
    execute(query?: Record<string, any>): Promise<variablenameconverterResponse>;
  }
}
