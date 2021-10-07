import React from "react";

export default function Paginetion() {
  return (
    <div>
      <div id="pagination">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
