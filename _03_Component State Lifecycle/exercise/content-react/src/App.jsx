import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  
  return (
    <div className="App">
      <main>
        <h1>ReactJS là gì?</h1>
        <button onClick={()=>setShow(!show)}>{show ? "Đóng giới thiệu" : "Xem giới thiệu"}</button>
        {show && 
           <p>ReactJS là một thư viện JavaScript phổ biến được Facebook phát triển, làm cho việc xây dựng giao diện người dùng tương tác trên web trở nên đơn giản và mạnh mẽ hơn bao giờ hết. Điểm mạnh của React nằm ở việc sử dụng cách tiếp cận thành phần, cho phép bạn phân chia ứng dụng thành các thành phần độc lập, dễ quản lý và tái sử dụng. Thông qua Virtual DOM, React cải thiện hiệu suất bằng cách chỉ cập nhật các phần của giao diện cần thiết, giúp tối ưu hóa trải nghiệm người dùng. Cú pháp khai báo của React làm cho việc viết mã trở nên dễ đọc và dễ hiểu hơn, giúp tăng tốc độ phát triển và bảo trì. Với hệ sinh thái phong phú của mình bao gồm các thư viện và công cụ bổ sung như React Router, Redux và Testing Library, ReactJS là lựa chọn hàng đầu cho việc xây dựng các ứng dụng web hiện đại, linh hoạt và dễ bảo trì.</p>
        }
      </main>
    </div>
  );
}

export default App;
