'My name is: Raissa'
'My name is: Raissa'

'Raissa'
'Raissa'

'My name is: ' + 'Raissa'
'My name is: Raissa'

'--> CONCATENATION'
'Total cost: $' + (1 * 5) + 1 * 3
'Total cost: $53'

'--> TEMPLATE STRING E INTERPOLATION'
`Total cost: $${5 + 3}`
'Total cost: $8'

alert(`Total cost: $${5 + 3}`)
undefined

'--> CONCATENATION'
'Total cost: $' + (599 + 295) / 100
'Total cost: $8.94'

'--> TEMPLATE STRING E INTERPOLATION'
`Total cost: $${(599 + 295) / 100}`
'Total cost: $8.94'

'--> MULTI LINE'
alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`);

`items (${2 + 2}): $${(2 * 2095 + 2* 799) / 100}`
'items (4): $57.88'

`Shipping & handing: $${(499 + 499) / 100}`
'Shipping & handing: $9.98'

`Total before tax: $${((2 * 2095 + 2* 799) + 998) / 100}`
'Total before tax: $67.86'

`Estimated tax (10%): $${Math.round((((2 * 2095 + 2* 799) + 998) )* 0.1) / 100}`
'Estimated tax (10%): $6.79'