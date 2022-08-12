export class TableDataService {
    getData() {
        return [
            {
                col1: "Data 1A",
                col2: "Data 1B",
                col3: "Data 1C",
                detail: [
                    {
                        detCol1: "Detail Data 1AA",
                        detCol2: "Detail Data 1AB"
                    },
                    {
                        detCol1: "Detail Data 2!A",
                        detCol2: "Detail Data 2AB"
                    }   
                ]
                
            },
            {
                col1: "Data 2A",
                col2: "Data 2B",
                col3: "Data 2C",
                detail: [
                    {
                        detCol1: "Detail Data 3AA",
                        detCol2: "Detail Data 3AB"
                    },
                    {
                        detCol1: "Detail Data 4AA",
                        detCol2: "Detail Data 4AB"
                    }   
                ] 
            }
        ]
    }
}