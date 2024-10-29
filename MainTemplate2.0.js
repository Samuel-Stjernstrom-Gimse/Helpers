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
/** Refreshes a data source and returns a promise that resolves if successful
 * @param {Object} dataSource - The data source to refresh.
 * @param {Function} dataSource.refreshDataSource
 * @returns {Promise<boolean>}
 **/
const asyncRefresh = dataSource =>
    new Promise((resolve, reject) =>
        dataSource?.refreshDataSource(err => err
            ? reject(err)
            : resolve(!err)
        )
    );

/**
 * Refreshes a data sources in parallel and returns a promise that resolves if successful.
 * @async
 * @param {Array<object>} dataSources - An array of data source objects to refresh.
 * @returns {Promise<void>} A promise that resolves when all operations are done.
 * @throws {Error} If an error occurs while refreshing data sources or if the function fails.
 */
const asyncRefreshAll = async dataSources => {
    const promises = [...new Set(dataSources
        .filter(ds => ds._internal.dataObject))]
        .map(asyncRefresh);

    try {
        await Promise.all(promises);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

/** Main application function that loads data sources.
 * @async
 * @returns {Promise<void>} A promise that resolves when all operations are done
 * @throws {Error} If an error occurs while refreshing data sources. or function fails
 **/
const app = async () => {
    try {
        /*
        await asyncRefresh(ds3)
        asyncRefreshAll([ds1, ds2])
        */
    } catch (error) {
        console.error('Error refreshing data sources:', error);
    }
};

app()
