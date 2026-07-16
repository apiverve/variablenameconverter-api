using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.VariableNameConverter
{
    /// <summary>
    /// Query options for the Variable Name Converter API
    /// </summary>
    public class VariableNameConverterQueryOptions
    {
        /// <summary>
        /// Array of variable names to convert (max 100)
        /// </summary>
        [JsonProperty("variables")]
        public List<string> Variables { get; set; }

        /// <summary>
        /// Target naming convention
        /// </summary>
        [JsonProperty("to")]
        public string To { get; set; }
    }
}
