/*-------------------------------------------------------------------------------------------------------| GLOBAL |---*/
const appState = {
    userName: 'Sam',
    id: 2113
};

/*----------------------------------------------------------------------------------------------------| FUNCTIONS |---*/

/*------------------------------------------------------------------------------------------------| DATA HANDLING |---*/
const handleError = (error, customMsg) => {
    console.error('An error occurred:', error, customMsg ? customMsg : '');
};

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

const asyncRefreshAll = async dataSources => {
    const promises = [...new Set(dataSources
        .filter(ds => ds?._internal?.dataObject))]
        .map(asyncRefresh);
    try {
        await Promise.all(promises);
    } catch (error) {
        handleError(error);
        throw error;
    }
};

/*---------------------------------------------------------------------------------------------------------| APP |---*/
const app = async () => {
    try {
    } catch (error) {
        handleError(error);
    }
};

app()

