import 'bootstrap/dist/css/bootstrap.min.css';
import CustomPaginationActionsTable from './DataTable3';

export default function Dashboard() {
    


  return (
    <div className='col m-3'>
      <div className="row mt-3">
          <div className="col-sm-6">
            <div className="d-flex form-group">
                {/* <label className="addform-label">Search</label> */}
                <input 
                  className="form-control" required 
                  type='text'
                  placeholder='Search by name/ id/ phone number'
                  onChange={(event) => console.log("fff ", event.target.value)}
                />
            </div>
          </div>
          
      </div>

      <CustomPaginationActionsTable />
    </div>
  )
}
