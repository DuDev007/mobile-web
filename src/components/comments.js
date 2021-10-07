import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export default function Comments(props) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    content: '',
  });
  const params = useParams();
  

  

  const sendValues = (e)=>{
      e.preventDefault();
      props.onSubmit(values);
  }
 

    return (
        <>
             <div id="comment" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="/post" >
              <div>
              <div class="form-group">
                <label>Tên:</label>
                <input
                  name="comm_name"
                  required
                  type="text"
                  class="form-control"
                  value={values.name}
                  onChange={(e)=>setValues(old=>({...old,name:e.target.value}))}
                />
                 
              </div> 
              <div class="form-group">
                <label>Email:</label>
                <input
                  name="comm_mail"
                  required
                  type="email"
                  class="form-control"
                  id="pwd"
                  value={values.email}
                  onChange={(e)=>setValues(old=>({...old,email:e.target.value}))}
                />
                
              </div>
              <div class="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="comm_details"
                  required
                  rows="8"
                  class="form-control"
                  value={values.content}
                  onChange={(e)=>setValues(old=>({...old,content:e.target.value}))}
                ></textarea>
              </div>
              </div>
              <button 
              type="submit" 
              name="sbm" 
              class="btn btn-primary"
              onClick={sendValues}
              // onSubmit={e => onSubmit(e)}
              >
                Gửi
              </button>
            </form>
          </div>
        </div>

        </>
    )
}
