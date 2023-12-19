var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/FGH41223111/cp2023_ag6 \xa0(小組倉儲連結) \n \n 組長: \n https://github.com/FGH41223111/cp2023 (41223111) \n 組員:\xa0 \n https://github.com/41223102/cp2023 (41223102) \n https://github.com/CYG41223103/cp2023 (41223103) \n https://github.com/41223113/cp2023 (41223113) \n https://github.com/kim41223114/cp2023 (41223114) \n https://github.com/41223116/cp2023 (41223116) \n https://github.com/zhe41223118/cp2023 \xa0(41223118) \n https://github.com/Linjiahong41223125/cp2023 (41223125) \n https://github.com/fws40923137/cp2023 (40923137) \n', 'tags': '', 'url': 'About.html'}, {'title': 'replit', 'text': '以下分頁面內都有講解如何架設replit網站編輯，都有一步步教學如何架設和編輯 \n 如想快速了解點 這裡 有說明如何建立個人倉儲並使用 Replit 協助維護內容 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ， 而 這邊 有教如何利用 replit 編輯網頁內容 \n \n https://github.com/mdecycu/cmsite \n 進入此連結，創建個人倉儲和網站 \n \n 點擊 Use this template 裡的 Create a new repository 來創建新的倉儲 \n \n 進入後畫面如下: \n \n 在 Owner 下， 前者 為要 新增至哪個倉儲帳 下(zhe41223118為範例)， 後者 為你要 倉儲名稱 \n 設定好後就可以 Create repository ，這樣你的一個倉儲就創建完畢了 \n (註:在一個倉儲帳號下可以擁有多個倉儲) \n 後話: \n 倉儲雖然好用但本身在上傳上有100MB限制(可用OneDrive解決)來付費解鎖， 當然本身是創建人想靠其來賺取使用者的投資，想沒有這個限制可以無限的上傳MB龐大的檔， 很簡單的解決方式不是投資下去就是自己架設倉儲網站，自己架設的有什麼限制都是自己說的算， 但推送大檔案，會使之後的推送都需重複推送大檔， 進而使傳輸一直有負擔，或因檔案過大使之後的acp都受阻， 而延伸出的需刪除上傳或壓縮檔案的問題， 使用 onedrive (上限5TB)， 將檔案透過連結下載的方式就能繞過倉儲的上傳限制。 (註:41223118留) \n', 'tags': '', 'url': 'replit.html'}, {'title': 'step1', 'text': '將剛創建的倉儲網址複製 \n 來到replit，登錄後點擊(左上角) Create a Repl 後 Import from GitHub 將網址貼上 \n \n or \n \n 上圖的 Change 可以選擇你要使用的程式 \n 這樣就可以點右下 Import from GitHub 新建了 \n', 'tags': '', 'url': 'step1.html'}, {'title': 'step2', 'text': '完成step1後會跑出這個畫面 \n \n 右方 Configure the Run Command 下輸入 python3 main.py 後 Done \n 之後將塗上左邊的兩條 \n git submodule update --init --recursive \n pip install flask flask_cors bs4 lxml pelican markdown gevent \n 依序貼到 shell 執行(執行是點 enter 鍵還 不要點 上方的 run ) \n \n 第二條程式會比較就 耐心等待 其跑完後就可以點擊 run ，該倉儲的晚站就會產生出了，如下: \n \n 直接 New tab 右鍵新分頁打開，就可到達網站，之後 Login (預設密碼皆為 admin ) \n 到這裡已完成大半，已經可以編輯網站，接下來是密碼和退送的處理方式。 \n \n', 'tags': '', 'url': 'step2.html'}, {'title': 'step3', 'text': '前提:這裡將會提到怎麼 \n 設定/隱藏網站密碼 \n 資料推送至倉儲 \n', 'tags': '', 'url': 'step3.html'}, {'title': 'gd', 'text': 'gd繪圖機奔需知請 參考影片 \n 範例程式及結果: \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nint main() {\n    int width = 800;\n    int height = 600;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    FILE *outputFile = fopen("hellogd.png", "wb");\n    if (outputFile == NULL) {\n \nfprintf(stderr, "Error opening the output file.\\n");\n \nreturn 1;\n    }\n    \n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    // 長方形塗色\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n    // 橢圓形塗色\n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n    // 橢圓形畫線\n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n    // 畫直線\n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n    \n    // 多邊形畫線\n    gdPoint points[4];\n    points[0].x = (int)width/4;\n    points[0].y = (int)height*3/4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n    gdImagePolygon(img, points, 4, black);\n    \n    // 多邊形塗色\n    gdPoint points2[4];\n    points2[0].x = (int)width/3;\n    points2[0].y = (int)height/2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n    gdImageFilledPolygon(img, points2, 4, red);\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \n \n \n \n', 'tags': '', 'url': 'gd.html'}, {'title': 'work', 'text': '所有完成，使用replit跟gd線繪製的成品都在此處 \n (最後都有標明為誰的製作和參考) \n 範例: \n \n // 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n   \n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n   \n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n   \n    return 0;\n} \n 以 replit製作，製作主要重點: \n replit.nix (雪花)內需有 \n { pkgs }: {\n    deps = [\n        pkgs.sudo\n        pkgs.clang_12\n        pkgs.ccls\n        pkgs.gdb\n        pkgs.gnumake\n        pkgs.gnuplot\n    ];\n} \n 程式:\xa0 \xa0 cd-檔案  (進入國旗程式所在資料夾) \n \xa0 \xa0 \xa0 \xa0 \xa0  cc 檔案名+ -lgd -lm  (選取要繪製檔案並繪製) \n \xa0 \xa0 \xa0 \xa0 \xa0  ./a.out  (執行) \n \n \n', 'tags': '', 'url': 'work.html'}, {'title': '台灣國旗', 'text': '\n // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// 幾何形狀著色與繪圖練習\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n// width 3: height 2\nint width = 1200;\n// 國旗長寬比為 3:2\nint height = (int)(width*2.0 / 3.0);\n \ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n \ndraw_roc_flag(img);\n \nFILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n \nvoid draw_roc_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\nint center_x = (int)(width/4);\nint center_y = (int)(height/4);\n// gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n// 由於中央白日圓形的半徑為青天寬度的 1/8\n// 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n// 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\nint sun_radius = (int)(width/8);\n// 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\nint white_circle_dia = sun_radius;\n// 中央藍色圓形半徑為中央白日的 1又 2/15\nint blue_circle_dia = white_circle_dia + white_circle_dia*2/15;\n// 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\nred = gdImageColorAllocate(img, 255, 0, 0); // 紅色\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色\nblue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n// 根據畫布大小塗上紅色長方形區域\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n// 青天面積為整面國旗的 1/4, 也是採用長方形塗色\ngdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n// 先設法以填色畫出六個白色堆疊菱形\ndraw_white_sun(img, center_x, center_y, sun_radius, white);\n// 利用一個藍色大圓與白色小圓畫出藍色環狀\ngdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\ngdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n \n}\n \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n// M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n// 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\nfloat deg = M_PI/180;\n// 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n// 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\nfloat sr = sun_radius/tan(75*deg);\nint ax, ay, bx, by, dx, dy, ex, ey;\ngdPoint points[4];\n/* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// AB\ngdImageLine(img, ax, ay, bx, by, color);\n// BE\ngdImageLine(img, bx, by, ex, ey, color);\n// ED\ngdImageLine(img, ex, ey, dx, dy, color);\n// DA\ngdImageLine(img, dx, dy, ax, ay, color);\n*/\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\nfor (int i=1;i<=6;i++){\n// A\npoints[0].x = ax+sun_radius*sin(30*deg*i);\npoints[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n// B\npoints[1].x = bx+sr-sr*cos(30*deg*i);\npoints[1].y = by-sr*sin(30*deg*i);\n// E\npoints[2].x = ex-sun_radius*sin(30*deg*i);\npoints[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n// D\npoints[3].x = dx-(sr-sr*cos(30*deg*i));\npoints[3].y = dy+sr*sin(30*deg*i);\n// 對菱形區域範圍塗色\ngdImageFilledPolygon(img, points, 4, color);\n// 在菱形區域外圍畫線, 明確界定菱形範圍\ngdImagePolygon(img, points, 4, color);\n}\n} \n 導師網站 提供程式 \n', 'tags': '', 'url': '台灣國旗.html'}, {'title': '美國國旗', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\nint width = 800;\nint height = (int)(width / 1.9);\n \ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n \ndraw_usa_flag(img);\n \nFILE *outputFile = fopen("./../images/usa_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\n \ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\n \nreturn 0;\n}\n \nvoid draw_usa_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// Colors for the flag\nred = gdImageColorAllocate(img, 178, 34, 52); // Red stripes\nwhite = gdImageColorAllocate(img, 255, 255, 255); // White stripes\nblue = gdImageColorAllocate(img, 60, 59, 110); // Blue field\n \nint stripe_height = height / 13;\nint stripe_width = width;\nint star_size = (int)(0.0308 * height); // Corrected star size (half the original size)\n \nfor (int y = 0; y < height; y += stripe_height) {\nif (y / stripe_height % 2 == 0) {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n} else {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n}\n}\n \ngdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n \nint star_spacing_x = (int)(0.126 * height); // Horizontal spacing between stars\nint star_spacing_y = (int)(0.054 * height); // Vertical spacing between stars\nint star_start_x = (int)(0.122 * height); // Starting X position for stars\nint star_start_y = (int)(0.0485 * height); // Starting Y position for stars\n \nfor (int row = 0; row < 9; row++) {\nint starsPerRow = (row % 2 == 0) ? 6 : 5;\nint space_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\nfor (int star = 0; star < starsPerRow; star++) {\nint x = star_start_x + star * star_spacing_x+space_x;\nint y = star_start_y + row * star_spacing_y;\ndraw_star(img, x, y, star_size, white);\n}\n}\n}\n \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color) {\ngdPoint points[10];\n \nfor (int i = 0; i < 10; i++) {\ndouble angle = M_PI / 2 + i * 2 * M_PI / 10+M_PI;\nint radius = (i % 2 == 0) ? size : size / 2;\npoints[i].x = x + radius * cos(angle);\npoints[i].y = y + radius * sin(angle);\n}\n \n// Fill the star with white color\ngdImageFilledPolygon(img, points, 10, color);\n} \n 導師網站提供基礎和41223118參考 這個網址 跟chatGTP提供諮詢修改後 \n', 'tags': '', 'url': '美國國旗.html'}, {'title': '日本國旗', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red );\n \nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = 2 * width / 3;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_japan_flag(img);\n \n    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white ;\n    int center_x =  0.5 * width;\n    int center_y =  0.5 * height;\n    int sun_radius = 145 ;\n \n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n \n \n    // 繪製白色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n \n \n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 3, sun_radius * 3, red);\n}\n \n 由41223113製作 \n', 'tags': '', 'url': '日本國旗.html'}, {'title': '中國國旗', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n\n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n\n    draw_chinese_flag(im);\n\n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n\n    return 0;\n}\n\n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n\n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n\n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n\n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n\n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n\n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n 由41223113繪製 \n \n', 'tags': '', 'url': '中國國旗.html'}, {'title': '英國國旗', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n\nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n\n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // 绘制英国国旗\n    draw_uk_flag(img);\n\n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\n\n\nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n\n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n\n\n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n\n    int x1, y1, x2, y2, x3, y3;\n\n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n\n\n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n\n  int x1, y1, x2, y2, x3, y3;\n\n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n\n\n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  }\n\n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n\n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n\n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n 由41223116繪製 \n', 'tags': '', 'url': '英國國旗.html'}, {'title': 'test', 'text': '所有測驗 考試題目/解答都會在這裡 \n', 'tags': '', 'url': 'test.html'}, {'title': 'w15_test', 'text': '先下載 這個題目 \n 1. 在 這個 gd檔中加入, 利用白色作為畫線顏色,\xa0將第二組的 ABED 等四個點的座標, 以直線相連 \n \n \n \n \n \n \n \n \n \n \n \n \n 2. 列出第二組 ABED 的四條直線與白日中的大圓所相交 (intersect) 的四個點座標 \n', 'tags': '', 'url': 'w15_test.html'}, {'title': 'exam_test', 'text': '前提\xa0 https://exam.cycu.org/public/code/index.php \n 測驗網址需傭有 ipv6 才可進入 \n', 'tags': '', 'url': 'exam_test.html'}, {'title': 'file', 'text': '檔案總攬\xa0 \n 必備三個檔案: \n tinyc.7z \n python3114_git_putty.7z \n w11_1a.7z \n 請下載進各自USB中。 \n \n tcc_w_gd_raylib_SDL2.7z \xa0(新版tcc) \n Run-Away_C_SDL2_game.7z \xa0(GAME) \n roc_list_coord_flag.7z \xa0(w15測驗題目) \n \n', 'tags': '', 'url': 'file.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};