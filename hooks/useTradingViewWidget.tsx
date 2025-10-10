'use client'; 


import { useEffect, useRef } from 'react';


const useTradingViewWidget = (
  scriptUrl: string,              // 🔹 رابط سكربت TradingView (مثلاً: embed-widget-market-overview.js)
  config: Record<string, unknown>,// 🔹 إعدادات الأداة (مثل الألوان، الرموز، اللغة، إلخ)
  height = 600                    // 🔹 الارتفاع الافتراضي للأداة إذا لم يتم تمريره
) => {

  // 🧭 نُنشئ مرجع (Ref) لعُنصر الـ <div> الذي سيُضاف بداخله السكربت لاحقاً
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🧱 نأخذ المرجع الحالي (العنصر الفعلي في الـ DOM)
    const container = containerRef.current;
    if (!container) return; // ❌ إذا لم يكن العنصر موجوداً، لا نفعل شيئاً

    // 🧹 تنظيف المحتوى السابق داخل العنصر قبل إضافة السكربت الجديد
    container.innerHTML = '';

    // 🧩 إنشاء عنصر <script> جديد في الـ DOM
    const script = document.createElement('script');
    script.src = scriptUrl;          // 🔗 تحديد مصدر السكربت (من TradingView)
    script.type = 'text/javascript'; // 📜 تحديد نوع السكربت
    script.async = true;             // ⚡ تحميله بشكل غير متزامن حتى لا يوقف الصفحة

    // 🧠 مكتبة TradingView تتطلب أن يكون الإعداد (config)
    // داخل السكربت نفسه كنص JSON، وليس كخصائص عادية
    script.innerHTML = JSON.stringify({
      ...config, // 🔸 ننسخ الإعدادات الممررة
      height,    // 🔸 نضيف الارتفاع الحالي ضمن الإعدادات
    });

    // 🧷 نضيف السكربت الذي أنشأناه داخل عنصر الـ <div> المحدد
    container.appendChild(script);

    // 🧼 دالة التنظيف (تعمل عند إزالة المكون من الصفحة)
    return () => {
      // 🧽 نحذف أي محتوى داخل العنصر حتى لا تبقى آثار للسكربت القديم
      container.innerHTML = '';
    };

    // 🔁 هذا الـ useEffect سيُعاد تشغيله فقط إذا تغيّر أحد هذه القيم:
    // (رابط السكربت - الإعدادات - الارتفاع)
  }, [scriptUrl, config, height]);

  // 📦 نُرجع المرجع (Ref) ليتم ربطه بعنصر الـ <div> داخل المكون الرئيسي
  return containerRef;
};

// 🚀 نُصدر الـ Hook حتى يمكن استدعاؤه في المكونات الأخرى
export default useTradingViewWidget;
