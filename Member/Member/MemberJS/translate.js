﻿app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
      /*--------------------Edit Profile-------------------*/
      Profile:'Your Profile',
      Title: 'Title',
      SelectTitle: '-- select your title --',
      Mrs: 'Mrs.',
      Ms: 'Miss',
      Mr:'Mr.',
      Username: 'User Name',
      Firstname: 'First Name',  
      Middlename: 'Middle Name'  ,
      Lastname: 'Last Name',
      Gender: 'Gender',
      Male: 'Male',
      Female: 'Female',
      Address1: 'Address1',
      Address2: 'Address2',
      SelectCity: '--select your city--',
      Bangkok: 'Bangkok',
      City: 'City',
      ChiangMai: 'Chiang Mai',
      Krabi: 'Krabi',
      Phuket: 'Phuket',
      Ubon: 'Ubon Ratchathani',
      Zipcode: 'Zipcode',
      Mobile: 'Mobile',
      Email: 'Email',
      Birthday: 'Birthday',
      Picture: 'Picture',
      Cancal: 'Cancal',
      Submit: 'Submit',
       /*--------------------Point-------------------*/
      Yourcard: 'Your cards',
      Cardnumber: 'Card number',
      Cardname: 'Card name',
      Points: 'Points',
      Balance: 'Balance',
      Activatedate: 'Activate Date',
      Expiredate: 'Expire Date',
      QRcode: 'QRcode',
      Barcode: 'Barcode',
      Close: 'Close',
      History: 'History',

       /*--------------------Map-------------------*/
      SortByLocation: 'By Location',
      SortByName: 'By Name',
      Readmore: 'Read more',

      /*--------------------Infor-------------------*/
      OishiGrand: 'oishi grand siam paragon',
      Back: 'Back',
      ShowMap: 'Show Map',

      /*--------------------Navigate-------------------*/
      EnterDestination: 'Enter Destination :',
      Select: 'select',
      SearchRoute: 'Search',

      /*--------------------Feedback-------------------*/
      Feedback: 'Feedback',
      Branch: 'Branch Services',
      SelectBranch: 'branch',
      Select1: 'Select branch',
      Select2: 'Oishi grand siam paragon',
      Select3: 'Oishi buffet seacon square',
      Select4: 'Oishi buffet seacon bangkae',
      Select5: 'Oishi buffet pinklao',
      Select6: 'Oishi buffet bigc Rama 4',
      Quality: 'quality',
      Taste: 'taste',
      VarietyOfFood: 'variety of food',
      FreshnessOfFood: 'freshness of food',
      Worthy: 'worthy',
      LookDelicious: 'look delicious',
      Send: 'Send',
      Thankyou: ' Thank you for your answer ',
      
      /*--------------------News-------------------*/
      Latest: 'Latest',
      Unread: 'Unread',

      /*--------------------Card-------------------*/
      Addcard: 'Add your card',
      Enterpin: 'Enter your card number and pin code',

      /*--------------------Index-------------------*/
       MemberCard: ' Member Card',
       EditMember: 'Edit Member',
       News: 'News',
       Map: 'Map',
       English: 'English',
       Thai: 'Thai',
       Welcome: 'Welcome',
       ChangeLanguage: 'Change Language',
       SeeAllAlerts: 'See All Alerts',
       EditProfile: 'EditProfile',
       LogOut: 'Log Out',

    FOO: 'This is a paragraph.',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_TH: 'thai'
  });
   
  $translateProvider.translations('th', {
   /*--------------------Edit Profile-------------------*/
      Profile: 'ข้อมูลส่วนตัว',
      Title: 'คำนำหน้า',
      SelectTitle: '-- เลือกคำนำหน้า --',
      Mrs: 'นาง',
      Ms: 'น.ส.',
      Mr: 'นาย',
      Username: 'ชื่อผู้ใช้',
      Firstname: 'ชื่อ',
      Middlename: 'ชื่อกลาง',
      Lastname: 'นามสกุล',
      Gender: 'เพศ',
      Male: 'ชาย',
      Female: 'หญิง',
      Address1: 'ที่อยู่ 1',
      Address2: 'ที่อยู่ 2',
      SelectCity: '---เลือกจังหวัด---',
      Bangkok: 'กรุงเทพฯ',
      City: 'จังหวัด',
      ChiangMai: 'เชียงใหม่',
      Krabi: 'กระบี่',
      Phuket: 'ภูเก็ต',
      Ubon: 'อุบลราชธานี',
      Zipcode: 'รหัสไปรษณีย์',
      Mobile: 'เบอร์โทรศัพท์',
      Email: 'อีเมล์',
      Birthday: 'วันเกิด',
      Picture: 'ภาพโปรไฟล์',
      Cancal: 'ยกเลิก',
      Submit: 'บันทึก',
       /*------------------ Point ---------------------*/
      Yourcard: 'บัตรของคุณ',
      Cardnumber: 'เลขที่บัตร',
      Cardname: 'ชื่อบัตร',
      Points: 'คะแนนสะสม',
      Balance: 'ยอดเงิน',
      Activatedate: 'วันที่เปิดใช้งาน',
      Expiredate: 'วันที่หมดอายุ',
      QRcode: 'คิวอาร์โค้ด',
      Barcode: 'บาร์โค้ด',
      Close: 'ปิด',
      History: 'ประวัติ',

      /*--------------------Map-------------------*/
      SortByLocation: 'ค้นหาร้านใกล้ตัว',
      SortByName: 'ค้นหาตามชื่อร้าน',
      Readmore: 'อ่านต่อ',

      /*--------------------Infor-------------------*/
      OishiGrand: 'โออิชิแกรนด์ สยามพารากอน',
      Back: 'กลับ',
      ShowMap: 'แสดงแผนที่',

      /*--------------------Navigate-------------------*/
      EnterDestination: 'เลือกร้านปลายทาง :',
      Select: 'เลือก',
      SearchRoute: 'ค้นหา',

      /*--------------------Feedback-------------------*/
      Feedback: 'ข้อติชม',
      Branch: 'สาขาที่ใช้บริการ',
      SelectBranch: 'สาขา',
      Select1: 'เลือกสาขา',
      Select2: 'โออิชิแกรนด์ สยามพารากอน',
      Select3: 'โออิชิบุฟเฟ่ต์ ซีคอนสแควร์',
      Select4: 'โออิชิบุฟเฟ่ต์ ซีคอนบางแค',
      Select5: 'โออิชิบุฟเฟ่ต์ ปิ่นเกล้า',
      Select6: 'โออิชิบุฟเฟ่ต์ บิ๊กซีพระราม4',
      Quality: 'คุณภาพ',   
      Taste: 'รสชาติอาหาร',      
      VarietyOfFood: 'ความหลากหลายของอาหาร',
      FreshnessOfFood: 'ความสดของอาหาร',
      Worthy: 'คุ้มค่าราคา',
      LookDelicious: 'หน้าตาและสีสันของอาหาร',
      Send: 'ส่ง',
      Thankyou: ' ขอบคุณสำหรับคำติชมของคุณ ',
      
      /*--------------------News-------------------*/
      Latest: 'ล่าสุด',
      Unread: 'ยังไม่ได้อ่าน',
      /*--------------------Card-------------------*/
      Addcard: 'เพิ่มบัตรของคุณ',
      Enterpin: 'กรุณาใส่เลขบัตรและเลข pin',

      /*--------------------Index-------------------*/
       MemberCard: 'บัตรสมาชิก',
       EditMember: 'แก้ไขข้อมูลส่วนตัว',
       News: 'ข่าวสาร',
       Map: 'แผนที่',
       English: 'ภาษาอังกฤษ',
       Thai: 'ภาษาไทย',
       Welcome: 'ยินดีต้อนรับ',
       ChangeLanguage: 'เปลี่ยนภาษา',
       SeeAllAlerts: 'ดูทั้งหมด',
       EditProfile: 'แก้ไขข้อมูลส่วนตัว',
       LogOut: 'ออกจากระบบ',

      FOO: 'Dies ist ein Paragraph.',
      BUTTON_LANG_EN: 'english',
      BUTTON_LANG_TH: 'thai'
    });
  $translateProvider.preferredLanguage('en');
});