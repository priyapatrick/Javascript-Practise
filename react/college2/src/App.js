import React from 'react';
import './App.css';

function App() {
  var studentsArray=[];
  var selectedIndex=-1;
  function init(){
    document.getElementById("regTable").innerHTML="";
    if(sessionStorage.studentsRecord){
      var firstName=document.getElementById("firstname").value;
      var lastName=document.getElementById("lastname").value;
      var dept=document.getElementById("department").value;
       var contactNum=document.getElementById("contact").value;
       var mail= document.getElementById("email").value;
      studentsArray=JSON.parse(sessionStorage.studentsRecord);
      for(var i=0;i<studentsArray.length;i++){
        createTableCell(
          i,
          studentsArray[i]=firstName,
          studentsArray[i]=lastName,
          studentsArray[i]=dept,
          studentsArray[i]=contactNum,
          studentsArray[i]=mail
          );
        
      }
    }
  }
  
  

  function onAddPress(){
    
    var firstName=document.getElementById("firstname").value;
    var lastName=document.getElementById("lastname").value;
    var dept=document.getElementById("department").value;
     var contactNum=document.getElementById("contact").value;
     var mail= document.getElementById("email").value;
     var stuObj={
       firstname:firstName,
        lastname:lastName, 
        department:dept, 
        contact:contactNum,
         email:mail
        };
     if(selectedIndex === -1){
       studentsArray.push(stuObj);
     }else{
       studentsArray.splice(selectedIndex,1,stuObj);
     }
     
     sessionStorage.studentsRecord=JSON.stringify(studentsArray);

     init();
    onClearPress();
     
    
 };

  function createTableCell(index,firstName,lastName,dept,contactNum,mail){
    var table=document.getElementById("regTable");
    var row=table.insertRow();
    
    var firstNameCell=row.insertCell(0);
    var lastNameCell=row.insertCell(1);
    var departmentCell=row.insertCell(2);
    var contactCell=row.insertCell(3);
    var emailCell=row.insertCell(4);
    var actionCell=row.insertCell(5);

    firstNameCell.innerHTML=firstName;
    lastNameCell.innerHTML=lastName;
    departmentCell.innerHTML=dept;
    contactCell.innerHTML=contactNum;
    emailCell.innerHTML=mail;
    

    let cellFiveButton = document.createElement('button');
    cellFiveButton.addEventListener('click',  () => {deleteTableRow(index)});
    cellFiveButton.innerText = "Delete";
    actionCell.append(cellFiveButton);

    let cellSixButton = document.createElement('button');
    cellSixButton.addEventListener('click',  () => {onEditPress(index)});
    cellSixButton.innerText = "Edit";
    actionCell.append(cellSixButton);
    
   
    
  }
  function deleteTableRow(index){
    /*var table=document.getElementById("regTable");
    table.deleteRow(index+1);
    */
    studentsArray.splice(index,1);
    sessionStorage.studentsRecord=JSON.stringify(studentsArray);
    init();
  }
  function onClearPress(){
    selectedIndex=-1;
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("department").value="";
    document.getElementById("contact").value="";
    document.getElementById("email").value="";
    document.getElementById("submit").innerHTML="Register";

  }

  function onEditPress(index){
    selectedIndex=index;
    var stuObj=studentsArray[index];
    document.getElementById("firstname").value=stuObj.firstname;
     document.getElementById("lastname").value=stuObj.lastname;
     document.getElementById("department").value=stuObj.department;
     document.getElementById("contact").value=stuObj.contact;
     document.getElementById("email").value=stuObj.email;
     document.getElementById("submit").innerHTML="Update";
  }
  
  
  
return(
  <div onLoad={init}>
    
    
    <div className="head">
      <img src="https://pbs.twimg.com/profile_images/861418866596954112/3PgrsZvg_400x400.jpg" alt="t-john" height="50" width="50"/>
      <h1 id='title'>T-John Institute Of Technology</h1>
      
     </div>
     
    
           <div className="sub-head">
           
             <form  >
                <input
                type="text"
                id="firstname"
                required="required"
                placeholder="Firstname"
              
                //onChange={handleAddDataChange}
                />
                <input type="text"
                id="lastname"
                required="required"
                placeholder="Lastname"
                //onChange={handleAddDataChange}

                />
                <input 
                type="text"
                id="department"
                required="required"
                placeholder="Department"
                //onChange={handleAddDataChange}

                />
                <input 
                type="text"
                id="contact"
                required="required"
                placeholder="Mobilenumber"
                //onChange={handleAddDataChange}

                />
                <input 
                type="email"
                id="email"
                required="required"
                placeholder="Email"
                //onChange={handleAddDataChange}

                />
                <button id="submit" onClick={onAddPress}>Register</button>
                <button id="clear" onClick={onClearPress}>Clear</button>

             </form>
           </div>
           <div className="grid">
           <table id="ttable">
                    <thead>
                       <tr>
                       <th>Firstname </th>
                       <th>Lastname </th>
                       <th>Department </th>
                       <th>Contact </th>
                       <th>Email </th>
                       <th>Actions</th>

                       </tr>
                    </thead>
                    <tbody id="regTable">

                    </tbody>
                 
    
           </table>
           
           </div>
           </div>
           
            );
      
  

}

export default App;
