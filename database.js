const oracledb=require('oracledb');
const dbConfig={
    user:"system",
    password:"manager",
    connectString:"localhost:1521/ORCL"
};
const Query=async(sql)=>{
    let connection;
    try{
        connection=await oracledb.getConnection(dbConfig);
        const result=await connection.execute(sql);
        await connection.commit();
        return result;
    }catch (error){
        console.error(error);
    }finally{
        if(connection){
            try{
                await connection.close();
            }catch (error){
                console.error(error);
            }
            }
        }
    };
const Result = async (...Parameters) => {
  
    let Sql, Message;
     console.log(typeof (Parameters[2]));
    Details = Parameters[2];
  
    console.log(Details);
    // if(typeof Parameters[2] === 'string') {
    //    Details = eval(`(${Parameters[2]})`); 
    // }
    switch (Parameters[1]) {
        case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.title}','${Details.name}','${Details.email}','${Details.yourstory}')`;
            Message = "Inserted Successfully";
            break;
        case "Update":
            Sql = `update ${Parameters[0]} set title = '${Parameters[3].title}',name= '${Parameters[3].name}',yourstory='${Parameters[3].yourstory}' where email = '${Details}'`;
            Message = `Succes Updating from ${Details.title, Details.name,Details.yourstory} to ${Parameters[3].title, Parameters[3].name,Parameters[3].yourstory}`;
            break;
        case "Delete":
            Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
            Message = `Success deleting ${Details}`;
            break;
        case "Read":
            Sql = `select * from ${Parameters[0]} where email='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            // if(Details.wef_date){
            //     Sql = `select * from ${Parameters[0]} where RollNumber = '${Details.wef_date}'`;
            //     Message = `${Details.wef_date} Retrived`
            // }
        break;
        default:
        console.error("Invalid Parameters");
        break;
    }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};
  
  const feedback= async (...Parameters) => {
    
    let Sql;
    console.log(typeof (Parameters[2]));
    Details = Parameters[2];
      try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
   switch (Parameters[1]) {
      case "Insert":
        Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.email}','${Details.Review}','${Details.Ratings}')`;
        break;
      case "Update":
        Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', email = '${Parameters[3].email}',Review = '${Parameters[3].Review}',Ratings = '${Parameters[3].Ratings}' where email = '${Details}'`;
        break;
      case "Delete":
        Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
        break;
      case "Read":
          Sql = `select * from ${Parameters[0]}`;
          if(Details != "All"){
            Sql = `select * from ${Parameters[0]} where email = '${Details}'`;
          }
        break;
      default:
        console.error("Invalid Parameters");
        break;
    }
    console.log(Sql);
    var result = await Query(Sql);
    return result;
  };
module.exports={Result:Result,
  feedback:feedback}

