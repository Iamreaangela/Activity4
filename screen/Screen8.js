import { View, Text, StyleSheet } from 'react-native'
import React , { useEffect,useRef, useState }from 'react';
import { DataTable ,Divider } from 'react-native-paper';

export default function Screen8() {

    const numberOfItemsPerPageList = [2, 3, 4];

const items = [
  {
    key: 1,
    name: 'Page 1',
  },
  {
    key: 2,
    name: 'Page 2',
  },
  {
    key: 3,
    name: 'Page 3',
  },
];

const [page, setPage] = useState(0);
const [numberOfItemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
const from = page * numberOfItemsPerPage;
const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

useEffect(() => {
   setPage(0);
}, [numberOfItemsPerPage]);
  return (
    <View style={styles.container}>
    <Text>DataTable.Cell</Text>
      <DataTable.Row>
       <DataTable.Cell numeric>1</DataTable.Cell>
       <DataTable.Cell numeric>2</DataTable.Cell>
       <DataTable.Cell numeric>3</DataTable.Cell>
       <DataTable.Cell numeric>4</DataTable.Cell>
     </DataTable.Row>
     <Text>DataTable.Header</Text>
     <DataTable>
        <DataTable.Header>
          <DataTable.Title
            sortDirection='descending'
          >
            Dessert
          </DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat (g)</DataTable.Title>
        </DataTable.Header>
      </DataTable>
      <Divider/>
      <Text>DataTable.Pagination</Text>
      <DataTable>
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        showFastPaginationControls
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={numberOfItemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
    <Divider/>
    <Text>DataTable.Row</Text>
    <DataTable.Row>
       <DataTable.Cell numeric>1</DataTable.Cell>
       <DataTable.Cell numeric>2</DataTable.Cell>
       <DataTable.Cell numeric>3</DataTable.Cell>
       <DataTable.Cell numeric>4</DataTable.Cell>
     </DataTable.Row>
     <Divider/>
     <Text>DataTable.Title</Text>
     <DataTable>
        <DataTable.Header>
          <DataTable.Title
            sortDirection='descending'
          >
            Dessert
          </DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat (g)</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
   padding: 5,
   gap: 10
    
    },
    row:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
}
);