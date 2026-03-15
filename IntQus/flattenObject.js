/* 
Write a JavaScript function that takes a nested object and flattens it into a single-level object. The keys in the resulting object should represent 
the path to the original values using dot (.) notation. 
Sample Input: let value = { user: { key_value_map: { CreatedDate: "123424", Department: { Name: "XYZ" } } } }; 
Sample Output: { "user.key_value_map.CreatedDate": "123424", "user.key_value_map.Department.Name": "XYZ" } 
*/