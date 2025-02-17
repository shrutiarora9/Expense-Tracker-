let expenses = [];

function addExpense() {
  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');

  const expense = {
    description: descriptionInput.value,
    amount: parseFloat(amountInput.value),
  };

  if (expense.description && !isNaN(expense.amount)) {
    expenses.push(expense);
    descriptionInput.value = '';
    amountInput.value = '';
    renderExpenses();
  }
}
function renderExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
  
    expenses.forEach((expense, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${expense.description}: $${expense.amount.toFixed(2)} <button onclick="deleteExpense(${index})">Delete</button>`;
      expenseList.appendChild(li);
    });
  }
  
  function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
  }