/*-------------------------------------------------------------------------------------------------| JS DOC TYPES |---*/
/** @typedef {{userName: string, id: number,}} AppState*/

/*-------------------------------------------------------------------------------------------------------| GLOBAL |---*/
/** @type {AppState} */
const appState = {
    userName: 'Sam',
    id: 2113
};

/*----------------------------------------------------------------------------------------------------| FUNCTIONS |---*/

/*------------------------------------------------------------------------------------------------| DATA HANDLING |---*/
/** Utility function to handle errors.
 * @param {Error} error - The error object.
 * @param {string} [customMsg] - Optional custom message to log.
 * @returns {void}*/
const handleError = (error, customMsg) => {
    console.error('An error occurred:', error, customMsg ? customMsg : '');
};

/** Refreshes a data source and returns a promise that resolves if successful
 * @param {Object} dataSource - The data source to refresh.
 * @param {Function} dataSource.refreshDataSource
 * @returns {Promise<boolean>} */
const asyncRefresh = (dataSource) =>
    new Promise((resolve, reject) => {
        if (!dataSource?._internal?.dataObject ) {
            return reject(new Error('Invalid data source'));
        }
        dataSource?.refreshDataSource(err => err
            ? reject(err)
            : resolve(!err)
        )
    });

/** Refreshes data sources in parallel and returns a promise that resolves if successful.
 * @async
 * @param {Array<object>} dataSources - An array of data source objects to refresh.
 * @returns {Promise<void>} A promise that resolves when all operations are done.
 * @throws {Error} If an error occurs while refreshing data sources or if the function fails.*/
const asyncRefreshAll = async dataSources => {
    const promises = [...new Set(dataSources
        .filter(ds => ds._internal?.dataObject))]
        .map(asyncRefresh);

    try {
        await Promise.all(promises);
    } catch (error) {
        handleError(error);
        throw error;
    }
};

/*---------------------------------------------------------------------------------------------------------| APP |---*/
/** Main application function that loads data sources and handles functions.
 * @async
 * @returns {Promise<void>} A promise that resolves when all operations are done
 * @throws {Error} If an error occurs while refreshing data sources. or function fails */
const app = async () => {
    try {
        /*
        await asyncRefresh(ds3)
        await asyncRefreshAll([ds1, ds2])
        */
    } catch (error) {
        handleError(error);
    }
};

app()

/**
 * @see {@link appState}
       - The only place to define global variables.
       
 * @see {@link handleError}
       - Custom generic error handling; prompts the user with error messages.
       - Remember to put your own logic here 

 * @see {@link asyncRefresh}
       - Can be used inside async functions; supports both `await` and direct invocation.

 * @see {@link asyncRefreshAll}
       - Refreshes data sources in parallel; returns a promise that resolves if successful.
       - Can be used inside async functions; dependent on the provided data sources.
       - Supports both `await` and direct invocation.

 * @see {@link app}
       - Main application function that loads data sources and orchestrates function calls.
       - Keep the main function concise; use `await` before data handlers for clarity.
 */
