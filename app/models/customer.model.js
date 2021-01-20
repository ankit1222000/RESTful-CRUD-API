const sql=require('./db.js');

const Customer=function(customer){
    this.email=customer.email,
    this.name=customer.name,
    this.active=customer.active
};

Customer.create=function(newCustomer,result){
    sql.query("INSERT INTO CUSTOMER SET ?",newCustomer,(err,res)=>{
        if(err) {
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Customer created: ",{id: res.insertId, ...newCustomer});
        result(null,{id: res.insertId, ...newCustomer});
    });
};

Customer.findById=function(customerId,result)
{
    sql.query(`SELECT * FROM CUSTOMER WHERE ID= ${customerId}`,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(result.length){
            console.log("found customer: ",res[0]);
            result(null,res[0]);
            return;
        }
        result({kind:"not found"},null);
    });
    //console.log(`customer not found for id ${customerId}`);
    
}

Customer.getAll=function(result){
    sql.query("SELECT * FROM CUSTOMER",(err,res)=>{
        if(err)
        {
            console.log(err);
            result(err,null);
            return;
        }
        if(result.length){
            console.log("Customers: ",res);
            result(null,res);
            return;
        }
    
    });
    //console.log("Customer Table is Empty: ");
    //result({kind:"empty"},null);
}

Customer.updateById=function(id,customer,result){
    sql.query("UPDATE CUSTOMER SET email=?,name=?,active=? where id=?",[customer.email,customer.name,customer.active,id],(err,res)=>{
        if(err){
            console.log(err);
            result(err,res);
            return;
        }
        if(res.affectedRows==0){
            console.log({kind:"not found"});
            result({kind:"not found"},null);
            return ;
        }
        console.log("customer update: ",{id,...customer});
    result(null,{id,...customer});
    });
    
}

Customer.removeById=function(id,result){
    sql.query(`DELETE FROM CUSTOMER WHERE id= ${id}`,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(res.affectedRows==0)
        {
            console.log(`customer with id ${id} does not not exist`);
            result({kind:"not found"},null)
            return;
        }
        console.log(`customer with id ${id} deleted `);
        result(null,res);
    });
   
}

Customer.removeAll=function(result){
    sql.query("DELETE FROM CUSTOMER",(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log(`Deleted rows ${res.affectedRows}`);
            result(null,res);
            return;
        }
    });
   //console.log("CUSTOMER IS ALREADY EMPTY");
    //result({kind:"empty"},null);
}

module.exports=Customer;
