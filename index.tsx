/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI } from '@google/genai';

const scriptContentElement = document.getElementById('script-content');

if (scriptContentElement) {
    const kịchBảnHTML = `
        <h2>Kịch Bản Dự Án: Giải Cứu Khu Rừng Phép Thuật Mini World</h2>

        <p><strong>Chủ đề:</strong> Phiêu lưu, giải đố, xây dựng và sáng tạo.</p>

        <h3>📖 Cốt truyện:</h3>
        <p>Khu Rừng Phép Thuật Mini World, nơi sinh sống của vô vàn sinh vật kỳ diệu và những loài cây rực rỡ, đang gặp nguy hiểm! Một thế lực bóng tối bí ẩn đã len lỏi vào khu rừng, đánh cắp đi những <strong>Viên Đá Năng Lượng</strong> quý giá. Thiếu đi sức mạnh của các viên đá, cây cối bắt đầu héo úa, các dòng suối ngừng chảy, và cả khu rừng chìm trong u buồn.
        Các bạn nhỏ ơi, hãy hóa thân thành những nhà thám hiểm dũng cảm, khoác lên mình bộ trang phục sáng tạo nhất và bắt đầu hành trình giải cứu Khu Rừng Phép Thuật!</p>

        <h3>🎯 Nhiệm vụ của bạn:</h3>
        <p>Nhiệm vụ chính của các bạn là tìm lại toàn bộ các Viên Đá Năng Lượng bị đánh cắp, khôi phục lại sự sống cho khu rừng và khám phá ra bí mật đằng sau thế lực bóng tối. Để làm được điều đó, các bạn sẽ cần:</p>
        <ol>
            <li><strong>Chuẩn bị hành trang - Xây dựng Trại Căn Cứ An Toàn:</strong>
                <ul>
                    <li>Xây dựng một ngôi nhà vững chãi bằng các khối cơ bản, nơi bạn có thể nghỉ ngơi và lên kế hoạch. (Tham khảo <strong>Bài 2: Xây Ngôi Nhà Đầu Tiên</strong>)</li>
                    <li>Tạo một khu vườn xinh xắn trồng các loại cây hữu ích, có thể cả một trang trại nhỏ. (Tham khảo <strong>Bài 3: Làm Vườn Xinh</strong>, <strong>Bài 7: Trang Trại Tự Động</strong>)</li>
                    <li>Trang trí trại căn cứ thật độc đáo theo phong cách của riêng bạn! (Tham khảo <strong>Bài 4: Trang Trí Ngôi Nhà</strong>)</li>
                </ul>
            </li>
            <li><strong>Khám phá Khu Rừng Phép Thuật - Tìm kiếm các Viên Đá Năng Lượng:</strong>
                <ul>
                    <li>Khu rừng rất rộng lớn! Hãy dùng <strong>Máy Địa Hình</strong> để nặn đồi, đào hồ, tạo ra những cảnh quan độc đáo như hang động bí mật, thác nước kỳ ảo, nơi các Viên Đá có thể được cất giấu. (Tham khảo <strong>Bài 5: Nặn Đất, Đào Hồ</strong>, <strong>Bài 6: Thêm Cây Xanh, Tạo Nguồn Nước</strong>)</li>
                    <li>Mỗi Viên Đá Năng Lượng sẽ được ẩn giấu trong một khu vực khác nhau, đòi hỏi bạn phải vượt qua thử thách hoặc giải được câu đố.</li>
                </ul>
            </li>
            <li><strong>Vượt qua thử thách - Sử dụng Logic và Sức mạnh Sáng tạo:</strong>
                <p>Mỗi Viên Đá Năng Lượng được bảo vệ bởi một thử thách. Hãy vận dụng kiến thức đã học để vượt qua!</p>
                <ul>
                    <li><strong>Thử thách 1: Mê Cung Kỳ Bí.</strong> Thiết kế một mê cung đầy cạm bẫy hoặc bí ẩn. Viên Đá Năng Lượng nằm ở cuối mê cung. (Tham khảo <strong>Bài 14: Xây Mê Cung Thử Thách</strong>)
                        <ul>
                            <li>Sử dụng <strong>Trigger</strong> để tạo đèn tự động bật sáng khi bạn đi vào một khu vực tối (<strong>Bài 11: Phép Thuật Trigger: Đi Vào Là Sáng Đèn!</strong>).</li>
                            <li>Dùng <strong>Trigger</strong> để mở những cánh cửa bí mật khi bạn đặt đúng vật phẩm hoặc đứng vào vị trí quy định (<strong>Bài 13: Trigger Mở Cửa Tự Động</strong>).</li>
                        </ul>
                    </li>
                    <li><strong>Thử thách 2: Bí Mật Mạch Điện.</strong> Tạo ra một hệ thống mạch điện phức tạp. Bạn cần bật các công tắc theo đúng thứ tự để dòng điện thắp sáng con đường dẫn đến Viên Đá hoặc kích hoạt một cơ chế bí mật. (Tham khảo <strong>Bài 9: Bí Mật Mạch Điện: Bật Tắt Đèn</strong>).</li>
                    <li><strong>Thử thách 3: Vượt Chướng Ngại Vật Bằng Xe Mỏ.</strong> Thiết kế một đoạn đường ray xe mỏ đầy thử thách, vượt qua dung nham hoặc vực sâu để lấy Viên Đá. (Tham khảo <strong>Bài 8: Chế Tạo Đường Ray và Xe Mỏ</strong>).</li>
                    <li><em>Gợi ý:</em> Các bạn có thể sáng tạo thêm các thử thách khác sử dụng kiến thức về <strong>Trigger</strong>, <strong>Luật Chơi</strong> (<strong>Bài 10</strong>), và các cơ chế tự động!</li>
                </ul>
            </li>
            <li><strong>Gặp gỡ Cư Dân Rừng Xanh - Tìm kiếm sự giúp đỡ:</strong>
                <ul>
                    <li>Tạo ra các <strong>NPC (Người Bạn Đồng Hành)</strong> là những sinh vật của rừng (ví dụ: Thần Rừng, cáo thông thái, sóc nhanh nhẹn). Họ có thể đưa ra gợi ý, giao nhiệm vụ phụ, hoặc kể cho bạn nghe những bí mật của khu rừng. (Tham khảo <strong>Bài 17: Tạo Người Bạn Đồng Hành NPC</strong>)</li>
                    <li>Sử dụng <strong>Trigger</strong> để NPC gửi thông báo hoặc hội thoại khi bạn đến gần. (Tham khảo <strong>Bài 16: Trigger Gửi Thông Báo</strong>)</li>
                </ul>
            </li>
            <li><strong>Phục Hồi Khu Rừng - Hoàn thành sứ mệnh:</strong>
                <ul>
                    <li>Sau khi thu thập đủ các Viên Đá Năng Lượng, hãy tìm đến "Bệ Đá Cổ" linh thiêng và đặt các viên đá vào đúng vị trí.</li>
                    <li>Khi tất cả các viên đá được đặt đúng, khu rừng sẽ được phục hồi! Hãy tạo hiệu ứng đặc biệt (ví dụ: cây cối bừng sáng, hoa nở rộ, âm nhạc vui tươi) để đánh dấu khoảnh khắc này.</li>
                </ul>
            </li>
        </ol>

        <h3>🛠️ Công cụ Mini World hỗ trợ:</h3>
        <ul>
            <li><strong>Khối Xây Dựng:</strong> Vô vàn loại khối để bạn xây nhà, tạo cảnh quan.</li>
            <li><strong>Máy Địa Hình:</strong> Thay đổi địa hình, tạo núi, sông, hồ theo ý muốn.</li>
            <li><strong>Trigger & Mạch Điện:</strong> Tạo ra các cơ chế tự động, logic game, hiệu ứng đặc biệt.</li>
            <li><strong>UI Editor:</strong> Thiết kế bảng hướng dẫn, thông báo, menu cho trò chơi của bạn. (Tham khảo <strong>Bài 15: Tạo Bảng Hướng Dẫn Với UI Editor</strong>)</li>
        </ul>

        <h3>🏆 Yêu cầu sản phẩm cuối cùng (Dự án của bạn):</h3>
        <ul>
            <li>Một thế giới Mini World hoàn chỉnh với câu chuyện "Giải Cứu Khu Rừng Phép Thuật" được cá nhân hóa.</li>
            <li>Có ít nhất 3 thử thách sử dụng Trigger hoặc mạch điện để tìm Viên Đá Năng Lượng.</li>
            <li>Có ít nhất 1 NPC đưa ra gợi ý hoặc nhiệm vụ.</li>
            <li>Xây dựng được một Trại Căn Cứ cá nhân.</li>
            <li>Thế giới có thể chơi được từ đầu đến cuối, dẫn đến việc phục hồi khu rừng.</li>
            <li>Thể hiện sự sáng tạo và dấu ấn cá nhân của bạn!</li>
            <li>Đừng quên chuẩn bị bài <strong>Giới Thiệu Sáng Tạo Của Em</strong> (<strong>Bài 20</strong>) để chia sẻ thành quả của mình nhé!</li>
        </ul>

        <h3>💡 Gợi ý thêm (Thử thách nâng cao):</h3>
        <ul>
            <li>Tạo thêm một mini-game trong khu rừng, ví dụ như <strong>Game Săn Kho Báu</strong> (<strong>Bài 18</strong>) với các hòm báu ẩn chứa vật phẩm hỗ trợ.</li>
            <li>Thiết kế trang phục hoặc công cụ đặc biệt cho nhân vật của bạn.</li>
            <li>Viết thêm các đoạn hội thoại thú vị và hài hước cho NPC.</li>
            <li>Sử dụng luật chơi (<strong>Bài 10</strong>) để tạo ra các quy tắc riêng cho thế giới của bạn.</li>
        </ul>
        <p>Chúc các bạn có những giờ phút thiết kế và lập trình thật vui vẻ, sáng tạo ra những Khu Rừng Phép Thuật tuyệt vời nhất!</p>
    `;
    scriptContentElement.innerHTML = kịchBảnHTML;

    // Add placeholder for Gemini creative tip
    const geminiTipContainer = document.createElement('div');
    geminiTipContainer.id = 'gemini-creative-tip-container';
    
    const tipHeader = document.createElement('h3');
    tipHeader.textContent = '✨ Gợi Ý Sáng Tạo Từ Gemini ✨';
    geminiTipContainer.appendChild(tipHeader);

    const tipTextElement = document.createElement('p');
    tipTextElement.id = 'gemini-tip-text';
    tipTextElement.textContent = 'Đang tải gợi ý từ Gemini...';
    geminiTipContainer.appendChild(tipTextElement);
    
    scriptContentElement.appendChild(geminiTipContainer);

    async function fetchCreativeTip() {
        try {
            if (!process.env.API_KEY) {
                tipTextElement.textContent = 'API Key chưa được cấu hình. Không thể tải gợi ý.';
                tipTextElement.style.color = 'orange';
                console.warn("API_KEY is not set in process.env");
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-preview-04-17',
                contents: 'Hãy đưa ra một lời khuyên sáng tạo thật ngắn gọn (tối đa 2 câu) bằng tiếng Việt cho một bạn nhỏ đang làm dự án game trong Mini World có tên "Giải Cứu Khu Rừng Phép Thuật". Lời khuyên nên khuyến khích sự độc đáo và vui vẻ.'
            });
            tipTextElement.textContent = response.text;
        } catch (error) {
            console.error("Lỗi khi lấy gợi ý từ Gemini:", error);
            tipTextElement.textContent = 'Không thể tải gợi ý sáng tạo lúc này. Đừng lo, hãy thử tự mình nghĩ ra một ý tưởng thật độc đáo và vui nhé!';
            tipTextElement.style.color = 'red';
        }
    }

    fetchCreativeTip();

} else {
    console.error('Không tìm thấy phần tử #script-content trong DOM.');
    document.body.innerHTML = '<p style="color: red; text-align: center; margin-top: 20px;">Lỗi: Không thể tải nội dung kịch bản. Vui lòng kiểm tra console.</p>';
}
