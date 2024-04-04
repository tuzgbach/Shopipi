import React from "react";
import "../Footer/footer.css";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content m-[3rem]">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Make Money with Us</li>
            <li>Amazon Payment</li>
            <li>Let Us Help You</li>
            <li>Amazon Payment</li>
            <li>Let Us Help You</li>
            <li>Amazon Payment</li>
            <li>Let Us Help You</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CÔNG TY TNHH CÔNG NGHỆ VÀ THƯƠNG MẠI TTS</h3>
          <ul>
            <li>
              Địa chỉ ĐKKD: Tầng 1, Toà nhà số 109-111, Đường 08, Khu dân cư
              Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, Thành phố Hồ Chí Minh,
              Việt Nam
            </li>
            <li>
              Kho Tân Phú: 284/11 Lũy Bán Bích, Phường Hòa Thạnh, Quận Tân Phú,
              Thành phố Hồ Chí Minh, Việt Nam
            </li>
            <li>Giấy chứng nhận Đăng ký Kinh doanh số </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Thông tin</h3>
          <ul>
            <li>Email: info@foodmap.asia</li>
            <li>Hotline: 02877702614 (8h00 - 18h00)</li>
            <li>
              <a href="">
                Điều khoản và điều kiện sử dụng <b>0314592854</b> " do Sở Kế
                hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 24/08/2017"
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hỗ trợ</h3>
          <ul>
            <li>Phương thức thanh toán</li>
            <li>Vận chuyển và giao nhận</li>
            <li>Chính sách đổi trả và hoàn tiền</li>
            <li>Liên hệ</li>
            <li>Let Us Help You</li>
            <li>Amazon Payment</li>
            <li>Let Us Help You</li>
          </ul>
        </div>
      </div>
      <div className="mt-3 bg-black p-[5rem]">
        <Footer2 />
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2023 | Developed by TungBach</p>
      </div>
    </div>
  );
};

export default Footer;
