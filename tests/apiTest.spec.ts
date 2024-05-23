import { test, expect  } from '@playwright/test';
import exp from 'constants';
import { request } from 'http';

test(' API Get Request', async({request})=> {
    const response = await request.get('https://reqres.in/api/users/2');
    expect (response.status()).toBe(200);
    const responseBody = await response.text();
    expect (responseBody).toContain('Weaver');
    expect(responseBody).not.toContain('Jhon');
    console.log(response.json);
});

test('API Post Request', async({request}) => {
 const response = await request.post('https://reqres.in/api/users',{data: {
  "name": "geetha",
  "job": "leader"
  }});
  expect (response.status()).toBe(201);
    const responseBody = await response.text();
    expect (responseBody).toContain('geetha');
    expect(responseBody).not.toContain('tester');
    console.log(response.json);
});

test('API Put Request', async({request}) => {
  const response = await request.put('https://reqres.in/api/users/2',{data: {
   "name": "Hitha",
   "job": "leader"
   }});
   expect (response.status()).toBe(200);
     const responseBody = await response.text();
     expect (responseBody).toContain('Hitha');
     expect(responseBody).not.toContain('tester');
     console.log(response.json);
 });

 test('API Delete Request', async({request}) => {
  const response = await request.delete('https://reqres.in/api/users/2');
    expect (response.status()).toBe(204);
});