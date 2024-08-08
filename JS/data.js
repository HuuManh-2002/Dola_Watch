const brands = [
  "Casio",
  "G-Shock",
  "Citizen",
  "OP",
  "Orient",
  "Seiko",
  "Michael",
  "Daniel Wellington",
  "Candino",
  "Sokolov",
  "Doxa",
  "Longines",
];
const categories = ["Đồng hồ nam", "Đồng hồ nữ"];
const names = [
  "Đồng hồ Classic sang trọng với thiết kế tinh tế và chất liệu cao cấp.",
  "Đồng hồ Elegance quý phái với kiểu dáng thanh lịch và lớp mạ vàng sang trọng.",
  "Đồng hồ Sport năng động với khả năng chống nước và thiết kế thể thao mạnh mẽ.",
  "Đồng hồ Luxury đẳng cấp với vỏ thép không gỉ và mặt kính sapphire bền bỉ.",
  "Đồng hồ Modern hiện đại với mặt số dễ đọc và dây đeo bằng da cao cấp.",
  "Đồng hồ Vintage cổ điển với thiết kế retro và chất liệu da thật bền đẹp.",
  "Đồng hồ Timeless vĩnh cửu với kiểu dáng vượt thời gian và bộ máy cơ tự động.",
  "Đồng hồ Executive lịch lãm với thiết kế tối ưu cho môi trường văn phòng.",
  "Đồng hồ Adventure phiêu lưu với khả năng chống sốc và chống nước tốt.",
  "Đồng hồ Fashion thời trang với màu sắc nổi bật và kiểu dáng độc đáo.",
  "Đồng hồ Professional chuyên nghiệp với các tính năng đa dạng và thiết kế tinh xảo.",
  "Đồng hồ Signature đặc trưng với thiết kế độc quyền và chi tiết tinh tế.",
  "Đồng hồ Chronograph thể thao với chức năng bấm giờ và thiết kế mạnh mẽ.",
  "Đồng hồ Smart Watch thông minh với kết nối Bluetooth và tính năng theo dõi sức khỏe.",
  "Đồng hồ Diver chuyên dụng với khả năng chống nước sâu và mặt số dễ đọc.",
  "Đồng hồ Classic Retro với thiết kế cổ điển và chất liệu cao cấp vượt thời gian.",
  "Đồng hồ Titanium siêu nhẹ với vỏ titanium và dây đeo mềm mại thoải mái.",
  "Đồng hồ Luxury Diamond với các viên đá quý trên mặt số, tạo vẻ lấp lánh sang trọng.",
  "Đồng hồ Aviator với thiết kế dành cho phi công và các tính năng đo thời gian chính xác.",
  "Đồng hồ Minimalist với kiểu dáng tối giản và thiết kế không có chi tiết thừa.",
  "Đồng hồ Retro Vintage với phong cách hoài cổ và các tính năng cơ bản đơn giản.",
  "Đồng hồ Techno với công nghệ mới nhất và thiết kế hiện đại ấn tượng.",
  "Đồng hồ Chrono Sport với chức năng thể thao và thiết kế mạnh mẽ cho vận động viên.",
  "Đồng hồ Elegant Dress với thiết kế thanh lịch và dây đeo bằng da cao cấp.",
  "Đồng hồ Fashion Trend với mẫu thiết kế mới nhất và màu sắc thời thượng nổi bật.",
  "Đồng hồ Pilot chuyên dụng cho phi công với các tính năng đo thời gian chính xác.",
  "Đồng hồ Urban Style với thiết kế hiện đại và các tính năng đa dụng cho đô thị.",
  "Đồng hồ Classic Gold với vỏ vàng và mặt số tinh xảo tạo phong cách sang trọng.",
  "Đồng hồ High-Tech với các tính năng công nghệ cao và thiết kế thể thao độc đáo.",
  "Đồng hồ Nautical với thiết kế dành cho yêu thích biển cả và thuyền buồm.",
  "Đồng hồ Dynamic Design với thiết kế năng động và các chi tiết độc đáo nổi bật.",
  "Đồng hồ Retro Classic với kiểu dáng cổ điển và chất liệu cao cấp thanh lịch.",
  "Đồng hồ Expedition Adventure với tính năng phiêu lưu và thiết kế chắc chắn bền bỉ.",
  "Đồng hồ Elite Series với chi tiết tinh xảo và vỏ ngoài sang trọng đẳng cấp.",
  "Đồng hồ Solar với công nghệ năng lượng mặt trời và thiết kế thân thiện với môi trường.",
  "Đồng hồ Dual-Time với khả năng hiển thị hai múi giờ và thiết kế tiện lợi cho di chuyển.",
  "Đồng hồ Minimalist Design với kiểu dáng tối giản và thiết kế thanh lịch hiện đại.",
  "Đồng hồ Precision Series với tính năng đo thời gian chính xác và thiết kế chuyên nghiệp.",
  "Đồng hồ Elegant Classic với kiểu dáng thanh lịch và chi tiết tinh xảo sang trọng.",
  "Đồng hồ Adventure Series với thiết kế chắc chắn và các tính năng chống nước cho hoạt động ngoài trời.",
  "Đồng hồ Vintage Retro với chi tiết hoài cổ và thiết kế độc đáo mang cảm giác của những thập kỷ trước.",
  "Đồng hồ Chronograph Pro với tính năng đo thời gian chính xác và thiết kế thể thao cho vận động viên.",
  "Đồng hồ Premium Luxury với vỏ ngoài sang trọng và chi tiết đắt giá, tạo vẻ đẹp quý phái.",
  "Đồng hồ Urban Trend với thiết kế hiện đại và các chi tiết thời trang nổi bật cho đô thị.",
  "Đồng hồ Sport Professional với tính năng thể thao và thiết kế chắc chắn cho các hoạt động thể chất.",
  "Đồng hồ Fashion Classic với phong cách thời trang và chi tiết tinh tế tạo nên sự sang trọng.",
  "Đồng hồ Aviation Series với thiết kế dành cho phi công và tính năng đo thời gian chính xác.",
  "Đồng hồ Technology Innovation với công nghệ mới nhất và thiết kế hiện đại cho người đam mê công nghệ.",
  "Đồng hồ Precision Time với các tính năng đo thời gian chính xác và thiết kế thanh lịch cho chuyên gia.",
  "Đồng hồ Stylish Trend với thiết kế thời trang và chi tiết sang trọng tạo phong cách nổi bật.",
  "Đồng hồ Adventure Pro với các tính năng phiêu lưu và thiết kế chắc chắn cho chuyến đi mạo hiểm.",
  "Đồng hồ Luxury Design với chi tiết tinh xảo và vỏ ngoài sang trọng, mang vẻ đẹp vượt thời gian.",
];
const img = [
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/fgw0100aw0-15775f27-e1be-421a-af5f-acd8ea138196.png?v=1694134890500",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/ga-1000-1adr-699x699.png?v=1687061856183",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/59-srz520p1-699x699.png?v=1687060768163",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/me3228-699x699.png?v=1687060397727",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/me3227-699x699.png?v=1687060277060",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/ltp-v001g-9budf-699x699.png?v=1687060043403",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/6-d124rbkw-699x699.png?v=1687059353183",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/68-efv-550l-1avudf-1-699x699.png?v=1687058396797",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/36-ra-ar0001s10b-699x699.png?v=1687058243213",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/mtp-1370d-7a2vdf-699x699.png?v=1687058087163",
  "https://bizweb.dktcdn.net/thumb/large/100/487/743/products/fgw0100aw0.png?v=1687057913103",
  "https://futuretime.vn/wp-content/uploads/2023/12/88-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/2-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/80-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/85-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/61-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/25-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/10012QM01_1-300x300.jpg",
  "https://futuretime.vn/wp-content/uploads/2023/12/10009KM01_1-300x300.jpg",
  "https://futuretime.vn/wp-content/uploads/2023/12/76-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/71-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/63-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/18-1-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/38-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/10009KM03_1-300x300.jpg",
  "https://futuretime.vn/wp-content/uploads/2023/12/10009KM02_1-300x300.jpg",
  "https://futuretime.vn/wp-content/uploads/2023/12/10011NM01_1-300x300.jpg",
  "https://futuretime.vn/wp-content/uploads/2023/12/60-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/47-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/81-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/66-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/19-1-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/89-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/87-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/39-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/48-300x300.png",
  "https://futuretime.vn/wp-content/uploads/2023/12/10012SL01_1-300x300.jpg",
  "https://futuretime.vn/wp-content/uploads/2023/12/10008TL01_1-300x300.jpg",
  "https://futuretime.vn/wp-content/uploads/2024/06/R32105353-300x300.png",
];
const descriptions = [
  "Đồng hồ được thiết kế với phong cách hiện đại, mang lại vẻ sang trọng và tinh tế cho người đeo.<br> Chất liệu vỏ được làm từ thép không gỉ cao cấp, mặt kính sapphire chống xước hoàn hảo.<br> Sản phẩm không chỉ đẹp mắt mà còn rất bền bỉ, chống chịu tốt trong mọi điều kiện thời tiết.<br> Dây đeo làm từ da thật mềm mại, tạo cảm giác thoải mái khi đeo.<br> Với độ chính xác cao và các tính năng phụ trợ như lịch ngày, lịch tuần, đồng hồ này sẽ là sự lựa chọn hoàn hảo cho những ai yêu thích sự tinh tế và hiện đại.<br>",
  "Đồng hồ có kiểu dáng thể thao, năng động, phù hợp với những ai yêu thích sự mạnh mẽ và cá tính.<br> Với khả năng chống nước lên đến 100 mét, bạn có thể tự tin đeo khi bơi lội hoặc tham gia các hoạt động ngoài trời.<br> Mặt số lớn với các chi tiết rõ ràng, giúp bạn dễ dàng theo dõi thời gian ngay cả khi đang di chuyển.<br> Dây đeo cao su bền bỉ, dễ dàng điều chỉnh kích thước cho phù hợp với cổ tay.<br> Đồng hồ này còn được trang bị tính năng bấm giờ thể thao, giúp bạn theo dõi thời gian luyện tập một cách chính xác và hiệu quả.<br>",
  "Đồng hồ sang trọng với thiết kế tinh xảo, dành cho những người yêu thích sự thanh lịch và đẳng cấp.<br> Vỏ ngoài được mạ vàng, tạo nên vẻ đẹp quý phái và đẳng cấp.<br> Mặt kính sapphire chống xước giúp bảo vệ đồng hồ khỏi những va đập hàng ngày.<br> Đặc biệt, sản phẩm còn có khả năng chống nước, giúp bạn yên tâm sử dụng trong mọi tình huống.<br> Dây đeo bằng da thật cao cấp, mang lại cảm giác mềm mại và thoải mái khi đeo.<br> Với bộ máy cơ tự động, bạn không cần phải lo lắng về việc thay pin,<br> đồng hồ luôn giữ được độ chính xác cao và hoạt động bền bỉ theo thời gian.<br>",
  "Đồng hồ cổ điển với phong cách vintage, mang lại vẻ đẹp quý phái và hoài cổ.<br> Vỏ ngoài làm từ thép không gỉ, kết hợp với mặt kính sapphire chống xước, bảo vệ tối đa cho đồng hồ.<br> Mặt số được thiết kế đơn giản nhưng tinh tế, dễ dàng xem giờ trong mọi điều kiện ánh sáng.<br> Dây đeo da thật mang lại cảm giác thoải mái và mềm mại khi đeo.<br> Đồng hồ này còn được trang bị chức năng lịch ngày, giúp bạn không bỏ lỡ bất kỳ sự kiện quan trọng nào.<br> Với khả năng chống nước lên đến 50 mét, bạn có thể yên tâm sử dụng hàng ngày mà không lo đồng hồ bị hỏng.<br>",
  "Đồng hồ thông minh với nhiều tính năng hữu ích, phù hợp cho những ai yêu thích công nghệ và sự tiện ích.<br> Mặt kính cảm ứng dễ sử dụng, với nhiều giao diện hiển thị thời gian khác nhau để bạn lựa chọn.<br> Đồng hồ này còn có khả năng kết nối với điện thoại thông minh, nhận thông báo cuộc gọi, tin nhắn và các ứng dụng.<br> Chức năng theo dõi sức khỏe như đo nhịp tim, đếm bước chân và tính lượng calo tiêu thụ.<br> Dây đeo silicone mềm mại, bền bỉ và dễ dàng điều chỉnh kích thước.<br> Khả năng chống nước đạt chuẩn IP68, bạn có thể sử dụng khi bơi lội hoặc vận động mạnh.<br>",
  "Đồng hồ sang trọng với thiết kế cổ điển và chất liệu cao cấp.<br> Vỏ ngoài được chế tác từ kim loại không gỉ, mang lại độ bền vượt trội.<br> Mặt kính được làm từ sapphire chống xước, giúp bảo vệ đồng hồ khỏi các va đập.<br> Dây đeo da thật tạo cảm giác mềm mại và thoải mái khi đeo lâu.<br> Đồng hồ còn có các tính năng tiện ích như lịch ngày và tuần, giúp bạn theo dõi thời gian dễ dàng.<br>",
  "Đồng hồ thể thao với thiết kế mạnh mẽ và khả năng chống nước tối ưu.<br> Mặt số lớn với các chỉ số rõ ràng giúp dễ dàng theo dõi thời gian khi vận động.<br> Dây đeo cao su bền bỉ, có thể điều chỉnh kích thước để phù hợp với cổ tay.<br> Tính năng bấm giờ thể thao cho phép bạn theo dõi thời gian luyện tập chính xác.<br> Đồng hồ này là sự lựa chọn lý tưởng cho những ai yêu thích hoạt động ngoài trời.<br>",
  "Đồng hồ cổ điển với phong cách vintage và các chi tiết sang trọng.<br> Vỏ ngoài được làm từ thép không gỉ và mặt kính sapphire chống xước.<br> Thiết kế mặt số đơn giản nhưng tinh tế, dễ dàng xem giờ trong mọi điều kiện ánh sáng.<br> Dây đeo da thật tạo cảm giác thoải mái và mềm mại khi đeo.<br> Đồng hồ này còn có chức năng lịch ngày và khả năng chống nước 50 mét.<br>",
  "Đồng hồ thông minh với nhiều tính năng hiện đại.<br> Mặt kính cảm ứng dễ sử dụng và giao diện hiển thị thời gian phong phú.<br> Đồng hồ kết nối với điện thoại thông minh để nhận thông báo cuộc gọi và tin nhắn.<br> Tính năng theo dõi sức khỏe bao gồm đo nhịp tim và đếm bước chân.<br> Khả năng chống nước đạt chuẩn IP68 giúp bạn sử dụng khi bơi lội hoặc vận động mạnh.<br>",
  "Đồng hồ thiết kế hiện đại với các tính năng tiện ích cho cuộc sống.<br> Vỏ ngoài bằng thép không gỉ và mặt kính chống xước bảo vệ đồng hồ lâu bền.<br> Dây đeo da thật tạo cảm giác thoải mái khi đeo cả ngày.<br> Tính năng lịch ngày và tuần giúp bạn dễ dàng theo dõi thời gian.<br> Với thiết kế thanh lịch, đồng hồ này phù hợp cho nhiều dịp khác nhau.<br>",
  "Đồng hồ thể thao với thiết kế năng động và bền bỉ.<br> Mặt số lớn dễ đọc và dây đeo cao su có thể điều chỉnh kích thước.<br> Khả năng chống nước lên đến 100 mét cho phép bạn sử dụng trong nhiều hoạt động ngoài trời.<br> Tính năng bấm giờ thể thao giúp bạn theo dõi thời gian luyện tập một cách chính xác.<br> Đồng hồ này là lựa chọn lý tưởng cho các vận động viên.<br>",
  "Đồng hồ cổ điển với thiết kế retro và các chi tiết tinh xảo.<br> Vỏ ngoài bằng thép không gỉ và mặt kính sapphire chống xước.<br> Mặt số đơn giản nhưng thanh lịch, dễ dàng đọc giờ.<br> Dây đeo da thật mềm mại và thoải mái khi đeo.<br> Đồng hồ này còn có tính năng lịch ngày và khả năng chống nước tốt.<br>",
  "Đồng hồ thông minh với màn hình cảm ứng và các tính năng hiện đại.<br> Kết nối với điện thoại thông minh để nhận thông báo và kiểm tra sức khỏe.<br> Tính năng theo dõi nhịp tim, đếm bước chân và lượng calo tiêu thụ.<br> Dây đeo silicone dễ dàng điều chỉnh và bền bỉ.<br> Khả năng chống nước IP68 cho phép sử dụng khi bơi lội hoặc vận động mạnh.<br>",
  "Đồng hồ hiện đại với thiết kế tinh tế và chất liệu cao cấp.<br> Vỏ ngoài bằng kim loại không gỉ và mặt kính sapphire chống xước.<br> Dây đeo da thật mang lại cảm giác thoải mái khi đeo lâu.<br> Tính năng lịch ngày và tuần giúp bạn quản lý thời gian dễ dàng.<br> Đồng hồ này là sự kết hợp hoàn hảo giữa phong cách và tính năng.<br>",
  "Đồng hồ thể thao với thiết kế mạnh mẽ và các tính năng hữu ích.<br> Mặt số lớn với các chỉ số rõ ràng và dây đeo cao su bền bỉ.<br> Khả năng chống nước lên đến 100 mét và tính năng bấm giờ chính xác.<br> Dây đeo có thể điều chỉnh để phù hợp với cổ tay của bạn.<br> Đồng hồ này phù hợp cho các hoạt động ngoài trời và thể thao.<br>",
  "Đồng hồ cổ điển với thiết kế vintage và chất liệu cao cấp.<br> Vỏ ngoài bằng thép không gỉ và mặt kính sapphire chống xước.<br> Mặt số đơn giản và thanh lịch, dễ đọc giờ trong mọi điều kiện ánh sáng.<br> Dây đeo da thật mềm mại và thoải mái khi đeo.<br> Đồng hồ này có chức năng lịch ngày và khả năng chống nước.<br>",
  "Đồng hồ thông minh với nhiều tính năng công nghệ tiên tiến.<br> Màn hình cảm ứng dễ sử dụng và các giao diện hiển thị phong phú.<br> Kết nối với điện thoại thông minh để nhận thông báo và kiểm tra sức khỏe.<br> Các tính năng bao gồm đo nhịp tim, đếm bước chân và tính lượng calo tiêu thụ.<br> Dây đeo silicone dễ điều chỉnh và có khả năng chống nước IP68.<br>",
  "Đồng hồ hiện đại với thiết kế đẹp mắt và tính năng tiện ích.<br> Vỏ ngoài bằng kim loại không gỉ và mặt kính chống xước giúp bảo vệ đồng hồ.<br> Dây đeo da thật mang lại sự thoải mái khi đeo lâu.<br> Tính năng lịch ngày và tuần giúp bạn theo dõi thời gian dễ dàng.<br> Đồng hồ này là sự lựa chọn hoàn hảo cho cả công việc và giải trí.<br>",
  "Đồng hồ thể thao với thiết kế năng động và các tính năng chống nước.<br> Mặt số lớn với các chỉ số dễ đọc và dây đeo cao su bền bỉ.<br> Khả năng chống nước đến 100 mét cho phép sử dụng khi bơi lội.<br> Tính năng bấm giờ chính xác giúp theo dõi thời gian luyện tập.<br> Đồng hồ này là lựa chọn tuyệt vời cho các vận động viên và người yêu thể thao.<br>",
  "Đồng hồ cổ điển với thiết kế vintage và các chi tiết tinh xảo.<br> Vỏ ngoài bằng thép không gỉ và mặt kính sapphire chống xước.<br> Mặt số đơn giản nhưng thanh lịch, dễ đọc giờ.<br> Dây đeo da thật mềm mại và thoải mái khi đeo.<br> Đồng hồ này còn có chức năng lịch ngày và khả năng chống nước.<br>",
  "Đồng hồ thông minh với màn hình cảm ứng và các tính năng hiện đại.<br> Kết nối với điện thoại thông minh để nhận thông báo và kiểm tra sức khỏe.<br> Tính năng theo dõi nhịp tim, đếm bước chân và tính lượng calo tiêu thụ.<br> Dây đeo silicone dễ điều chỉnh và bền bỉ.<br> Khả năng chống nước IP68 cho phép sử dụng khi bơi lội hoặc vận động mạnh.<br>",
  "Đồng hồ hiện đại với thiết kế tinh tế và chất liệu cao cấp.<br> Vỏ ngoài bằng kim loại không gỉ và mặt kính sapphire chống xước.<br> Dây đeo da thật mang lại cảm giác thoải mái khi đeo lâu.<br> Tính năng lịch ngày và tuần giúp bạn quản lý thời gian dễ dàng.<br> Đồng hồ này là sự kết hợp hoàn hảo giữa phong cách và tính năng.<br>",
  "Đồng hồ thể thao với thiết kế mạnh mẽ và các tính năng hữu ích.<br> Mặt số lớn với các chỉ số rõ ràng và dây đeo cao su bền bỉ.<br> Khả năng chống nước lên đến 100 mét và tính năng bấm giờ chính xác.<br> Dây đeo có thể điều chỉnh để phù hợp với cổ tay của bạn.<br> Đồng hồ này phù hợp cho các hoạt động ngoài trời và thể thao.<br>",
  "Đồng hồ cổ điển với thiết kế vintage và chất liệu cao cấp.<br> Vỏ ngoài bằng thép không gỉ và mặt kính sapphire chống xước.<br> Mặt số đơn giản và thanh lịch, dễ đọc giờ trong mọi điều kiện ánh sáng.<br> Dây đeo da thật mềm mại và thoải mái khi đeo.<br> Đồng hồ này có chức năng lịch ngày và khả năng chống nước.<br>",
  "Đồng hồ thông minh với nhiều tính năng công nghệ tiên tiến.<br> Màn hình cảm ứng dễ sử dụng và các giao diện hiển thị phong phú.<br> Kết nối với điện thoại thông minh để nhận thông báo và kiểm tra sức khỏe.<br> Các tính năng bao gồm đo nhịp tim, đếm bước chân và tính lượng calo tiêu thụ.<br> Dây đeo silicone dễ điều chỉnh và có khả năng chống nước IP68.<br>",
];

function getRandomDate(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomTime = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomTime.toISOString().split("T")[0]; // Chuyển đổi sang định dạng YYYY-MM-DD
}
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
//hàm tạo dữ liệu
const generateProducts = (num) => {
  const products = [];
  for (let i = 1; i <= num; i++) {
    products.push({
      id: `MH${String(i).padStart(3, "0")}`,
      name: getRandomElement(names),
      brand: getRandomElement(brands),
      category: getRandomElement(categories),
      sale_number: Math.floor(Math.random() * 1500 + 50),
      price: Math.floor(Math.random() * 1000) * 100000 + 100000,
      createDate: getRandomDate("2024-01-01", "2024-08-01"),
      image: getRandomElement(img),
      describe: getRandomElement(descriptions),
    });
  }
  localStorage.setItem("products", JSON.stringify(products));
};

function renderProduct(){
  if (!localStorage.getItem("products")) {
    generateProducts(100);
    return
  }
  return
}

document.addEventListener("DOMContentLoaded", function () {
  renderProduct();
});
