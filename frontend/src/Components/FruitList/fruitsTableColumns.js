import { textFilter, Comparator } from 'react-bootstrap-table2-filter';

const nameFilter = textFilter({
  placeholder: 'Name',  // custom the input placeholder
  className: 'my-custom-text-filter', // custom classname on input
  defaultValue: '', // default filtering value
  comparator: Comparator.LIKE, // default is Comparator.LIKE
  caseSensitive: false, // default is false, and true will only work when comparator is LIKE
  delay: 0, // how long will trigger filtering after user typing, default is 500 ms
  // getFilter: (f) => { ... }, // accept callback function and you can call it for filter programmtically
  id: 'name', // assign a unique value for htmlFor attribute, it's useful when you have same dataField across multiple table in one page
});
const familyFilter = textFilter({
  placeholder: 'Family',  // custom the input placeholder
  className: 'my-custom-text-filter', // custom classname on input
  defaultValue: '', // default filtering value
  comparator: Comparator.LIKE, // default is Comparator.LIKE
  caseSensitive: false, // default is false, and true will only work when comparator is LIKE
  delay: 0, // how long will trigger filtering after user typing, default is 500 ms
  // getFilter: (f) => { ... }, // accept callback function and you can call it for filter programmtically
  id: 'family', // assign a unique value for htmlFor attribute, it's useful when you have same dataField across multiple table in one page
});

export const columns = (favorite) => {
  let columns = [{
    dataField: 'genus',
    text: 'Genus'
  }, {
    dataField: 'name',
    text: 'Name',
    filter: nameFilter
  }, {
    dataField: 'family',
    text: 'Family',
    filter: familyFilter
  }, {
    dataField: 'order',
    text: 'Order'
  }, {
    dataField: 'carbohydrates',
    text: 'Carbohydrates'
  }, {
    dataField: 'protein',
    text: 'Protein'
  }, {
    dataField: 'fat',
    text: 'Fat'
  }, {
    dataField: 'calories',
    text: 'Calories'
  }, {
    dataField: 'sugar',
    text: 'Sugar'
  }];

  if (!favorite &&
    !columns.filter((column) => column.dataField === 'favorite').length)
    columns.push({
      dataField: 'favorite',
      text: 'Favorite'
    })

  if (favorite) {
    columns.forEach(column => {
      column.filter = null;
    });
    console.log(columns);
  }

  return columns;
}

export const sumColumns = (fruits) => {
  let nurations = ["carbohydrates", "protein", "fat", "calories", "sugar"];
  let nurationSum = {};
  nurations.forEach(nuration => {
    nurationSum[nuration] = fruits.reduce((total, fruit) => {
      return total + fruit[nuration];
    }, 0).toFixed(2);
  });
  const columns =
    [{
      dataField: 'total',
      text: 'Total'
    }, {
      dataField: 'total1',
      text: ''
    }, {
      dataField: 'total2',
      text: ''
    }, {
      dataField: 'total3',
      text: ''
    }, {
      dataField: 'carbohydrates',
      text: '' + nurationSum.carbohydrates
    }, {
      dataField: 'protein',
      text: '' + nurationSum.protein
    }, {
      dataField: 'fat',
      text: '' + nurationSum.fat
    }, {
      dataField: 'calories',
      text: '' + nurationSum.calories
    }, {
      dataField: 'sugar',
      text: '' + nurationSum.sugar
    }];
  return columns;
}