const cds = require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');


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
        console.log(ID)
        const query = await SELECT.one.from(employee).where({ID: ID})

        if(!query){
            return req.error(404,"Enter the Correct ID")
        }
        if(query.nameFirst.charAt(0) == 'S'){
            return req.error(400,"The name which starts with 'S' cannot be deleted.")
        }
    })
})