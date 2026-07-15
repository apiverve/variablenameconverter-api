declare module '@apiverve/variablenameconverter' {
  export interface variablenameconverterOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface variablenameconverterResponse {
    status: string;
    error: string | null;
    data: VariableNameConverterData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface VariableNameConverterData {
      results:      Result[];
      count:        number | null;
      targetFormat: null | string;
  }
  
  interface Result {
      original:  null | string;
      converted: null | string;
  }

  export default class variablenameconverterWrapper {
    constructor(options: variablenameconverterOptions);

    execute(callback: (error: any, data: variablenameconverterResponse | null) => void): Promise<variablenameconverterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: variablenameconverterResponse | null) => void): Promise<variablenameconverterResponse>;
    execute(query?: Record<string, any>): Promise<variablenameconverterResponse>;
  }
}
