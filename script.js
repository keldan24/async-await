// Iterate with async/async functions
async function iterateWithAsyncAwait(values) {
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
// Example usage:
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);


//Tast 02
async function awaitCall() {
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: 'fetched some data from API' });
            }, 2000); 
        });
    };
    const response = await fetchData();
    console.log(response.data);
}
awaitCall();


// Task 03A
async function awaitCall() {
    const apiUrl = 'https://catfact.ninja/fact';
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch data from API');
            }
            return await response.json();
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    const responseData = await fetchData();
    console.log(responseData);
}
awaitCall();


// Task 03B
async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async Function 1 executed');
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async Function 2 executed');
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async Function 3 executed');
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}
chainedAsyncFunctions();


// Task 04
async function concurrentRequests() {
    const apiUrl1 = 'https://api.publicapis.org/entries';
    const apiUrl2 = 'https://www.boredapi.com/api/activity';
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const [response1, response2] = await Promise.all([
            fetch(apiUrl1, requestOptions),
            fetch(apiUrl2, requestOptions)
        ]);

        if (!response1.ok || !response2.ok) {
            throw new Error('Failed to fetch data from one or more APIs');
        }

        const responseData1 = await response1.json();
        const responseData2 = await response2.json();

        console.log('API Response 1:', responseData1);
        console.log('API Response 2:', responseData2);
    } catch (error) {
        console.log('An error occurred:', error);
    }
}
concurrentRequests();


// Task 05
async function parallelCalls(urls) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url, requestOptions))
        );

        for (const response of responses) {
            if (!response.ok) {
                throw new Error('Failed to fetch data from URLs');
            }
        }

        const responseData = await Promise.all(
            responses.map(response => response.json())
        );

        console.log('Responses:', responseData);
    } catch (error) {
        console.log('An error occurred:', error);
    }
}
const urls = [
    'https://example.com/api/',
    'https://example.com/api/',
    'https://example.com/api/'
];
parallelCalls(urls);
