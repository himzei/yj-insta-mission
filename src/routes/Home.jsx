import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import ArrowAsset from "../assets/ArrowAsset";
import CopyAsset from "../assets/CopyAsset";
import InstagramAsset from "../assets/InstagramAsset";
import Method1 from "../assets/png/method1.png";
import Method2 from "../assets/png/method2.png";
import Number1 from "../assets/Number1";
import Number2 from "../assets/Number2";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Home() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const hashtags = "#영진직업전문학교 #취업률1위";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // const { data, mutate } = useMutation(performanceUpdate);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-screen relative max-w-sm">
        <main className="w-full flex flex-col ">
          <div className="w-full mx-auto">
            <div className="bg-white px-2 py-8 rounded-xl flex flex-col space-y-6">
              {/* 01 키워드복사 */}
              <div className="border border-gray-200 bg-gray-50 rounded-lg flex flex-col overflow-hidden mt-4">
                <div className="bg-gradient-to-r from-gray-300 to-gray-200 px-4 py-1 text-gray-900 flex justify-between">
                  <span>01. 해시태그 복사</span>
                </div>

                <CopyToClipboard text={hashtags} onCopy={() => setCopied(true)}>
                  <div className="px-2 py-4 flex flex-col w-full justify-center items-center space-y-4">
                    <div className="w-full flex flex-col items-center">
                      {hashtags}
                    </div>
                    <Button
                      color="red"
                      variant={copied ? "fill" : "outlined"}
                      className="flex items-center gap-3 py-2 focus:ring-0"
                    >
                      {copied ? "복사완료!" : "해시태그 복사"}
                      {copied ? null : <CopyAsset />}
                    </Button>
                  </div>
                </CopyToClipboard>
              </div>

              {/* 아래로 화살표 */}
              <div className="flex mx-auto w-10">
                <ArrowAsset />
              </div>

              {/* 02. 해시태그 붙여넣기 */}
              <div className="border border-gray-200 rounded-lg flex flex-col overflow-hidden bg-gray-50">
                <div className="bg-gradient-to-r from-gray-300 to-gray-200 px-4 py-1 text-gray-900 flex justify-between">
                  02. 해시태그 붙여넣기
                </div>
                <div className="px-2 py-4 w-full flex flex-col space-y-2">
                  <div className="w-full flex flex-col items-center">
                    <p>인스타그램에서 복사 한 키워드</p>
                    <p>붙여넣기고 피드작성하기!</p>
                  </div>

                  <div className="flex items-center py-2 text-sm px-4 text-center w-full justify-center">
                    <Link to="https://www.instagram.com">
                      <Button
                        color="red"
                        variant="outlined"
                        className="flex items-center gap-3 py-2 focus:ring-0"
                      >
                        인스타그램 이동
                        <InstagramAsset />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 아래로 화살표 */}
              <div className="flex mx-auto w-10">
                <ArrowAsset />
              </div>

              <div className="border border-gray-200 rounded-lg flex flex-col overflow-hidden bg-gray-50">
                <div className="bg-gradient-to-r from-gray-300 to-gray-200 px-4 py-1 text-gray-900 flex justify-between">
                  03. 입력폼에 URL 붙여넣기
                </div>
                <div className="px-2 py-4 w-full flex flex-col space-y-2">
                  <div className="w-full flex flex-col items-center">
                    <p>인스타그램에서 링크복사 하여</p>
                    <p>아래 입력폼에서 붙여넣기 후 전송 !</p>
                  </div>

                  <div className="w-full flex flex-col justify-center items-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600 px-2 flex items-center space-x-2">
                        <Number1 />
                        <p>적성된 피드에서 링크복사 버튼 클릭</p>
                      </div>
                      <div>
                        <img src={Method1} alt="Insta method1" className="" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-gray-600 px-2 flex items-center space-x-2">
                        <Number2 />
                        <p>링크복사 아래 입력폼에서 복사된 URL 붙여넣기</p>
                      </div>
                      <div>
                        <img src={Method2} alt="Insta method2" className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 아래로 화살표 */}
              <div className="flex mx-auto w-10">
                <ArrowAsset />
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border border-gray-200 rounded-lg flex flex-col overflow-hidden bg-gray-50">
                  <div className="bg-gradient-to-r from-gray-300 to-gray-200 px-4 py-1 text-gray-900 flex justify-between">
                    04. 인스타그램 URL 전송
                  </div>
                  <div className="px-2 py-4 w-full flex flex-col space-y-3">
                    <div className="w-full flex">
                      <Input
                        {...register("instaUrl", {
                          required: "URL을 입력해 주셔야 합니다!",
                          pattern: {
                            value: /www\.instagram\.com/,
                            message: "인스타그램 URL을 입력해 주셔야 합니다!",
                          },
                        })}
                        label="인스타그램 URL"
                        color="red"
                        className="focus:ring-0"
                      />
                    </div>
                    {errors?.instaUrl && (
                      <div className="text-sm text-red-500">
                        {errors.instaUrl.message}
                      </div>
                    )}
                    <div className="w-full flex justify-center items-center space-x-4">
                      <Button color="red" fullWidth type="submit">
                        전송하기
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
