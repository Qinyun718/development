## Organization of components
The project includes three components in total. They are "DisplayList", "FilteredList", and "App". The "DisplayList" include the mapping function to map through all the data the project needs and the aggregation function to add or remove the selected items to the shopping cart with the updated total prices. The "FilteredList" used "DisplayList" to displayed the shopping cart and implemented the filtering and sorting function. Then, "App" called the "FilteredList" to complete the project. 


### How data is passed down through components
The dataset is created in "App.js". It is passed to "FilteredList" with the statement of "this.props.list". 

### How the user trigger state changes
When people click on the button created within the website, there are functions to change the state value by calling "this.SetState". With the specified the state value, the button would trigger different results. 