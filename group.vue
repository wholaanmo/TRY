<template>
  <navigation/>
 
   <header class="container">
     <div class="content-wrapper">
       <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
 
       <form @submit.prevent="handleSubmit">
         <input type="hidden" v-model="action" />
         <input type="hidden" v-if="editId" v-model="editId" />
 
         <div class="form-group">
           <label>EXPENSE TYPE:</label>
           <select v-model="expenseType" required @change="checkExpenseType">
             <option value="Food">Food</option>
             <option value="Bill">Bill</option>
             <option value="Transportation">Transportation</option>
             <option value="Entertainment">Entertainment</option>
             <option value="Healthcare">Healthcare</option>
             <option value="Personalcare">Personal care</option>
             <option value="Shopping">Shopping</option> 
             <option value="Other">Other</option>
            </select>
         </div>
 
         <div v-if="expenseType === 'Other'" class="form-group">
           <label>Custom Expense Type:</label>
           <input type="text" v-model="customExpenseType" placeholder="Enter custom expense type" />
         </div>
 
         <div class="form-group">
           <label>ITEM NAME:</label>
           <input type="text" v-model="itemName" placeholder="Enter item name" required />
         </div>
 
         <div class="form-group">
           <label>ITEM PRICE:</label>
           <input type="number" v-model.number="itemPrice" placeholder="Enter item price" required step="0.01" />
         </div>
 
         <button class="btn" type="submit">{{ editId ? 'Save Changes' : 'Add Expense' }}</button>
         <button class="btn1" type="submit">{{ editId ? 'Save Changes' : 'Add Budget' }}</button>
       </form>
 
       <div>
         <h3>Your Expenses</h3>
         <ul>
           <li v-for="expense in expenses" :key="expense.id">
             {{ expense.name }} - ₱{{ expense.price.toFixed(2) }}
           </li>
         </ul>
       </div>
     </div>
     <div class="total">
       Total: ₱{{ (totalAmount * 50).toFixed(2) }} (≈ ${{ totalAmount.toFixed(2) }})
     </div>
    </header>
 </template>
 
 <script>
import Navigation from "@/components/navigation.vue"; 
 
 export default {
   components: { Navigation },
   data() {
     return {
       expenseType: '',
       customExpenseType: '',
       itemName: '',
       itemPrice: '',
       successMessage: '',
       editId: null,
       action: 'add',
       expenses: []
     };
   },
   computed: {
     totalAmount() {
       return this.expenses.reduce((sum, expense) => sum + expense.price, 0);
     }
   },
   methods: {
     checkExpenseType() {
       if (this.expenseType === "Other") this.customExpenseType = "";
     },
     handleSubmit() { /* Logic here */ }
   }
 };
 </script>
 
 
 <style scoped>
 
 .container {
    background-color: #405f4a;
    max-width: 1000px;
    width: 90%; /* Make sure it stretches properly */
    margin: auto;
    border-radius: 30px;
    top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers items horizontally */
    margin-top: 160px;
    margin-left: 400px;
    height: 600px; /* ADD THIS: Fixed height for scrollable area */
    overflow-y: auto; /* ADD THIS: Enables vertical scrolling */
    overflow-x: hidden; /* Prevents horizontal scrolling */
    justify-content: flex-start;
    
 }
 
 .content-wrapper {
     width: 100%; /* Ensures the form takes the full width */
     overflow-y: visible;
     display: flex;
     flex-direction: column;
     margin-top: 45px;
     align-items: center; /* Centers form inputs */
 }
 
 .success-message {
     color: black;
     padding: 10px;
     margin-bottom: 20px;
     border-radius: 5px;
     text-align: center;
 }
 
 table {
     width: 75%;
     border-collapse: collapse;
     margin-top: 20px;
 }
 
 table, th, td {
     border: 1px solid white;
     padding: 7px;
     text-align: left;
     color: black;
 }
 
 th {
     background-color: rgba(255, 255, 255, 0.15);
     color: black;
 }
 
 .total {
     font-size: 20px;
     font-weight: bold;
     color: black;
     padding: 20px;
     background-color: white;
     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
     text-align: center;
     width: 1100px;
     position: sticky; /* Keeps it visible at the bottom */
     bottom: 0; /* Stick to the bottom */

 
 }
 
 .form-group {
     margin-bottom: 20px;
     margin-top: 30px;
 }
 
 label {
     display: block;
     margin-bottom: 5px;
     font-weight: bold;
     font-size: 17px;
     color: black;
 }
 
 input[type="text"],
 input[type="number"],
 select {
     width: 800px;
     padding: 10px;
     font-size: 16px;
     border-radius: 10px;
     border: 3px solid #ddd;
     border-color: black;
     box-sizing: border-box;
     min-height: 35px;
 }
 
 .btn {
     padding: 12px 50px;
     background-color: white;
     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
     color: black;
     border: none;
     border-radius: 12px;
     cursor: pointer;
     font-size: 15px;
     transition: background-color 0.3s, color 0.3s; /* Smooth effect */
}

.btn:hover {
    background-color: rgb(26, 25, 25); /* Change to any color you want */
    color: white; /* Text color on hover */
}

.btn1 {
     padding: 12px 50px;
     background-color: white;
     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
     color: black;
     border: none;
     border-radius: 12px;
     cursor: pointer;
     font-size: 15px;
     margin-left: 430px;
     transition: background-color 0.3s, color 0.3s; /* Smooth effect */
}

.btn1:hover {
    background-color: rgb(26, 25, 25); /* Change to any color you want */
    color: white; /* Text color on hover */
}

/* RESPONSIVE DESIGN */

@media screen and (max-width: 1048px) {
    .container {
        margin: 150px 40px 30px 40px;
        padding: 15px;
    }

    .content-wrapper {
        margin-top: 10px;
        padding: 15px;
    }

    .form-group {
        width: 100%;
        margin-left: -270px;
        padding: 0 300px;
    }

    input[type="text"],
    input[type="number"],
    select {
        width: 95%;
        font-size: 15px;
    }

    .btn,
    .btn1 {
        width: 40%;
        font-size: 15px;
        margin: 10px auto;
        display: block;
    }

    .total {
        font-size: 17px;
        padding: 15px;

    }
}


 @media screen and (max-width: 768px) {
    .container {
        margin: 90px 15px 20px 15px;
        padding: 10px;
    }

    .content-wrapper {
        margin-top: 60px;
        padding: 10px;
    }

    .form-group {
        width: 100%;
        padding: 0 10px;
    }

    input[type="text"],
    input[type="number"],
    select {
        width: 100%;
        max-width: 100%;
        font-size: 14px;
        box-sizing: border-box;
    }

    .btn,
    .btn1 {
        width: 100%;
        margin: 10px 0;
        font-size: 14px;
        padding: 10px;
    }

    .total {
        width: 100%;
        font-size: 16px;
        padding: 15px;
        position: sticky;
        bottom: 0;
        background-color: #fff; /* Ensures text is readable */
    }
}

@media screen and (max-width: 480px) {
    label {
        font-size: 14px;
    }

    .btn, .btn1 {
        padding: 10px;
        font-size: 13px;
    }

    .container {
        margin-top: 100px;
    }
}
</style>
