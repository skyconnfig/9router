"use client";
import { useState } from "react";

export default function GetStarted() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-[#120f0d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Steps */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">30 秒快速上手</h2>
            <p className="text-gray-400 text-lg mb-8">
              安装 9Router，通过 Web 控制台配置服务商，然后开始转发 AI 请求。
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-[#f97815]/20 text-[#f97815] flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg">安装 9Router</h4>
                  <p className="text-sm text-gray-500 mt-1">运行 npx 命令即可立即启动服务</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-[#f97815]/20 text-[#f97815] flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg">打开控制台</h4>
                  <p className="text-sm text-gray-500 mt-1">通过网页界面配置服务商与 API 密钥</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-[#f97815]/20 text-[#f97815] flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg">转发请求</h4>
                  <p className="text-sm text-gray-500 mt-1">将你的 CLI 工具指向 http://localhost:20128</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code block */}
          <div className="flex-1 w-full">
            <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#3a2f27] shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-500 font-mono">terminal</div>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div 
                  className="flex items-center gap-2 mb-4 group cursor-pointer"
                  onClick={() => handleCopy("npx 9router")}
                >
                  <span className="text-green-400">$</span>
                  <span className="text-white">npx 9router</span>
                  <span className="ml-auto text-gray-500 text-xs opacity-0 group-hover:opacity-100">
                    {copied ? "✓ 已复制" : "复制"}
                  </span>
                </div>
                
                <div className="text-gray-400 mb-6">
                  <span className="text-[#f97815]">&gt;</span> 正在启动 9Router...<br/>
                  <span className="text-[#f97815]">&gt;</span> 服务运行于 <span className="text-blue-400">http://localhost:20128</span><br/>
                  <span className="text-[#f97815]">&gt;</span> 控制台： <span className="text-blue-400">http://localhost:20128/dashboard</span><br/>
                  <span className="text-green-400">&gt;</span> 已就绪，开始转发！✓
                </div>
                
                <div className="text-xs text-gray-500 mb-2 border-t border-gray-700 pt-4">
                  📝 可在控制台中配置服务商，或使用环境变量
                </div>
                
                <div className="text-gray-400 text-xs">
                  <span className="text-purple-400">数据位置：</span><br/>
                  <span className="text-gray-500">  macOS/Linux:</span> ~/.9router/db.json<br/>
                  <span className="text-gray-500">  Windows:</span> %APPDATA%/9router/db.json
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

