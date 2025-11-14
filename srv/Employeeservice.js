const cds = require('@sap/cds');


module.exports = cds.service.impl(function () {
 const {employee} = this.entities
    
    this.before('CREATE',employee, async req=>{
       
        const {salaryAmount,Currency_code} = req.data
        if(salaryAmount<50000 && Currency_code == 'USD'){   
            console.log("Create operation successful")
            
        }
        else{
            return req.error(404,"Employee Salary must be less than 50000USD");
        }
    }),
    this.before('UPDATE',employee,async req=>{
        const {salaryAmount,Currency_code,nameFirst,loginName} = req.data
        if(salaryAmount<50000 && Currency_code === 'USD'){   
            console.log("Update operation successful")
        }
        if(nameFirst || loginName){
            return req.error(404,"Cannot be changed")
        }
    }),
    this.before('DELETE',employee,async req=>{
        const {ID} = req.params[0]
        // console.log(req.params[0])
        const {nameFirst} = req.data
        console.log(ID)
        const query = cds.ql
        console.log("Delete performed")
        const first = await cds.run(
            `Delete from table ${employee} where ID=${ID} and ${nameFirst.nameFirst} not like "S%"` 
        )
        
        // if(first.charAt(0) ==='S'){
        //     console.log("Delete not possible")
        //     return req.error("404","cannot be entered")
        // }
        // else{
        //     console.log("Delete operation is Successful")
        // }
    })
})