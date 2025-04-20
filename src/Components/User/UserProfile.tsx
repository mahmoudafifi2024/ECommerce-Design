import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImage?: string;
}

interface ChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = React.useState<UserData>({
    name: 'محمد أحمد',
    email: 'mohamed@example.com',
    phone: '0123456789',
    address: 'القاهرة، مصر',
    profileImage: '/images/avatar.png'
  });

  const [changePassword, setChangePassword] = React.useState<ChangePassword>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [isEditing, setIsEditing] = React.useState(false);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Profile:', userData);
    setIsEditing(false);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password Change:', changePassword);
    setChangePassword({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="profile-container">
      <Row className="justify-content-center">
        <Col md="8" className="bg-white rounded p-3 shadow-sm">
          <div className="profile-header d-flex align-items-center mb-4">
            <img
              src={userData.profileImage}
              alt="profile"
              className="rounded-circle"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <div className="ms-3">
              <h4 className="mb-1">{userData.name}</h4>
              <p className="text-muted mb-0">{userData.email}</p>
            </div>
          </div>

          {isEditing ? (
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label className="form-label">الاسم</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">رقم الهاتف</label>
                <input
                  type="tel"
                  className="form-control"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">العنوان</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.address}
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                />
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">حفظ التغييرات</button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setIsEditing(false)}>
                  إلغاء
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-info">
              <div className="mb-3">
                <strong>رقم الهاتف:</strong> {userData.phone}
              </div>
              <div className="mb-3">
                <strong>العنوان:</strong> {userData.address}
              </div>
              <button 
                className="btn btn-outline-primary"
                onClick={() => setIsEditing(true)}>
                تعديل البيانات
              </button>
            </div>
          )}

          <hr className="my-4" />

          <h5 className="mb-3">تغيير كلمة المرور</h5>
          <form onSubmit={handleChangePassword}>
            <div className="mb-3">
              <label className="form-label">كلمة المرور الحالية</label>
              <input
                type="password"
                className="form-control"
                value={changePassword.currentPassword}
                onChange={(e) => setChangePassword({ 
                  ...changePassword, 
                  currentPassword: e.target.value 
                })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">كلمة المرور الجديدة</label>
              <input
                type="password"
                className="form-control"
                value={changePassword.newPassword}
                onChange={(e) => setChangePassword({ 
                  ...changePassword, 
                  newPassword: e.target.value 
                })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">تأكيد كلمة المرور الجديدة</label>
              <input
                type="password"
                className="form-control"
                value={changePassword.confirmPassword}
                onChange={(e) => setChangePassword({ 
                  ...changePassword, 
                  confirmPassword: e.target.value 
                })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              تغيير كلمة المرور
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile; 