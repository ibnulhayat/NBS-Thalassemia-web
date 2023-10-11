import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, Table } from 'react-bootstrap';

export default function DashboardTable({dataList}){
    
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Baby Name</th>
            <th>Phone Number</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            dataList.map((item) =>
              <tr>
                <td>{item?.id}</td>
                <td>{item?.babyName}</td>
                <td>{item?.mobileNumber}</td>
                <td>{item?.testResult === 0? 'পজেটিভ': 'নেগেটিভ'}</td>
              </tr>
            )
          }
          
        </tbody>
      </Table>
      <TablePagination />
    </div>
  )
}

function TablePagination() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}