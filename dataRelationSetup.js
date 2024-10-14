const relations = [
    /*{
        src: dsMaster,
        children: [
            {
                src: dsChild,
                childLink: 'SubID',
                masterLink: 'SubEntityID',
            }
        ]
    }*/
]

const refreshChildren = (ds, columnName, id) => {
    const setup = relations.find(({src}) => src === ds);
    const data = columnName
        ? ds.find(({columnName}) => columnName === id)
        : ds?.currentRow();

    setup?.children.forEach(({src, childLink, masterLink}) => {
        src?.recordSource.setWhereClause(`${childLink} = ${data[masterLink]}`);
        src?.refreshDataSource();
    });
};

