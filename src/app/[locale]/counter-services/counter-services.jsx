"use client"
// import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useTranslations } from "next-intl";

export default function CounterServices() {
  const t = useTranslations('homePage.secondBlock');
  const [data, setData] = useState({ availableSlots: null, totalCapacity: null, totalCompletedPeople: null, totalBookedPeople: null }); // Khởi tạo state với giá trị mặc định
  const [loading, setLoading] = useState(true); // Khởi tạo state để theo dõi trạng thái tải
  const [dots, setDots] = useState(''); // Khởi tạo state cho dấu ba chấm
  const apiURL = "https://services.theark.studio";
  // const apiURL = "http://localhost:1337";

  // Giá trị mặc định
  const defaultValues = {
    availableSlots: 21,
    totalCapacity: 50,
    totalCompletedPeople: 55,
    totalBookedPeople: 129
  };

  useEffect(() => {
    // Hàm gọi API
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}/api/system-parameter-stl/config`); // Thay thế URL bằng URL API của bạn
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setData(defaultValues); // Gán giá trị mặc định khi có lỗi
      } finally {
        setLoading(false); // Đặt loading thành false khi hoàn thành
      }
    };

    fetchData(); // Gọi hàm fetchData

    // Tạo một hàm để cập nhật dấu ba chấm
    const updateDots = () => {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + '.'; // Thêm một dấu chấm
        }
        return ''; // Reset lại nếu đã có 3 dấu chấm
      });
    };

    // Nếu đang tải, gọi hàm updateDots mỗi giây
    const intervalId = setInterval(() => {
      if (loading) {
        updateDots();
      }
    }, 300); // Thay đổi khoảng thời gian nếu cần

    return () => clearInterval(intervalId); // Dọn dẹp interval khi component unmount
  }, [loading]); // Chạy khi loading thay đổi

  return (
    <div className="services__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                {/* <Image src="/cleaning.png" alt="" width={50} height={50} /> */}
                <i className="fas fa-calendar-check" style={{ fontSize: "50px" }}></i>
              </div>
              <div className="services__area-item-content">
                <h1>
                  {loading ? dots : data?.totalBookedPeople || defaultValues.totalBookedPeople} {/* Hiển thị số khi không có dữ liệu */}
                </h1>
                <h5>
                  {t('bookedSlots')}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                <i className='fas fa-users' style={{ fontSize: "50px" }}></i>
              </div>
              <div className="services__area-item-content">
                <h1>
                  {loading ? dots : data?.totalCapacity || defaultValues.totalCapacity}+ {/* Hiển thị số khi không có dữ liệu */}
                </h1>
                <h5>
                  {t('capacity')}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                <i className='fas fa-user-check' style={{ fontSize: "50px" }}></i>
              </div>
              <div className="services__area-item-content">
                <h1>
                  {loading ? dots : data?.totalCompletedPeople || defaultValues.totalCompletedPeople} {/* Hiển thị số khi không có dữ liệu */}
                </h1>
                <h5>
                  {t('complete')}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
