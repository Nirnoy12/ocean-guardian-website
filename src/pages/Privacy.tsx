import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert"
          >
            <h1 className="font-heading font-bold text-3xl text-foreground">
              {t('Privacy Policy', 'गोपनीयता धोरण')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full my-6" />
            <p className="text-muted-foreground">
              {t('Last updated:', 'अंतिम अद्यतन:')} {new Date().toLocaleDateString('en-IN')}
            </p>
            <div className="text-muted-foreground space-y-4 mt-8">
              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('INTRODUCTION', 'परिचय')}
              </h2>
              <p>
                {t(
                  'The contents of this website, including photos, are the exclusive rights and property of JALJIV RAKSHAK FOUNDATION (Regd.) reproduction of any portion, contents or photos will be treated as in infringement of private rights. Any person, misusing or misrepresenting the same can be held accountable under the Information Technology (Amendment) Act, 2008, to be read with Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data Or Information) Rules 2011.',
                  'या वेबसाइटची सामग्री, फोटोंसह, JALJIV RAKSHAK FOUNDATION (नोंदणीकृत) चे विशेष अधिकार आणि मालमत्ता आहे. कोणतीही भाग, सामग्री किंवा फोटोंचे पुनरुत्पादन खाजगी अधिकारांचे उल्लंघन म्हणून हाताळले जाईल. कोणीही व्यक्ती त्याचा गैरवापर किंवा चुकीचे प्रतिनिधित्व केल्यास माहिती तंत्रज्ञान (दुरुस्ती) अधिनियम, 2008 अंतर्गत जबाबदार धरली जाऊ शकते, जी माहिती तंत्रज्ञान (वाजवी सुरक्षा पद्धती आणि प्रक्रिया आणि संवेदनशील वैयक्तिक डेटा किंवा माहिती) नियम 2011 सह वाचली जावी.'
                )}
              </p>
              <p>
                {t(
                  'All communications received through social media viz name, address, email id, etc. will be treated as private and confidential.',
                  'सोशल मीडिया मार्गे प्राप्त झालेली सर्व संप्रेषणे म्हणजे नाव, पत्ता, ईमेल आयडी इ. खाजगी आणि गोपनीय म्हणून हाताळली जातील.'
                )}
              </p>

              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('CONSENT', 'संमती')}
              </h2>
              <p>
                {t(
                  'Donors will be requested before sharing information for a purpose other than those that are set out in this Privacy Policy. The general public have different privacy concerns. Care will be taken through this Privacy Policy statement to address such issue.',
                  'या गोपनीयता धोरणामध्ये नमूद केलेल्या उद्देशांशिवाय इतर कोणत्याही उद्देशासाठी माहिती सामायिक करण्यापूर्वी दात्यांकडून विनंती केली जाईल. सामान्य लोकांना वेगवेगळ्या गोपनीयतेच्या चिंता असतात. अशा समस्येचे निराकरण करण्यासाठी या गोपनीयता धोरण विधानाद्वारे काळजी घेतली जाईल.'
                )}
              </p>

              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('DATA SECURITY', 'डेटा सुरक्षा')}
              </h2>
              <p>
                {t(
                  'There will be a sincere effort on our part to protect information from accidental or intended destruction (By Hackers) and circumstances arising on events beyond our control. Every possible step will be undertaken to protect the NGO and its users from unauthorised alteration, disclosure or destruction of information coming to us through social/electronic media. The NGO will follow the standard practice to review the collected information its storage and processing practices, including physical security measures, to guard against unauthorised access to the computer systems.',
                  'आमच्या नियंत्रणाबाहेरील घटनांमुळे उद्भवणार्या परिस्थितीतून आणि अपघाती किंवा हेतुपुरस्सर नाशापासून (हॅकर्सद्वारे) माहितीचे संरक्षण करण्यासाठी आमच्या वतीने प्रामाणिक प्रयत्न केला जाईल. सोशल/इलेक्ट्रॉनिक मीडियामार्गे आमच्याकडे येणारी माहिती अनधिकृत बदल, प्रकटीकरण किंवा नाशापासून संस्था आणि त्याच्या वापरकर्त्यांचे संरक्षण करण्यासाठी प्रत्येक शक्य पावले उचलली जातील. संस्था संगणक प्रणालींमध्ये अनधिकृत प्रवेशापासून संरक्षण करण्यासाठी गोळा केलेल्या माहितीची स्टोरेज आणि प्रक्रिया पद्धतींचे पुनरावलोकन करण्यासाठी भौतिक सुरक्षा उपायांसह मानक पद्धतीचे अनुसरण करेल.'
                )}
              </p>

              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('SHARING', 'शेअरिंग')}
              </h2>
              <p>
                {t(
                  'Through this Privacy Policy statement we are restricted to share personal information with individuals, HUFs, Partnership firms, LLPs, Private or Public companies or other organisation unless we have written consent; or sharing of data becomes legally enforceable to meet any applicable law, regulation, legal process, or enforceable Government request. Enforced applicable terms of service, including investigation of potential violations. Detect, prevent or otherwise address fraud, security, technical issues.',
                  'या गोपनीयता धोरण विधानाद्वारे आम्ही लेखी संमती नसल्यास व्यक्ती, HUF, भागीदारी फर्म, LLP, खाजगी किंवा सार्वजनिक कंपन्या किंवा इतर संस्थांसह वैयक्तिक माहिती सामायिक करण्यास मर्यादित आहोत; किंवा कोणत्याही लागू कायद्याचे पालन करण्यासाठी, नियमन, कायदेशीर प्रक्रिया किंवा लागू शासकीय विनंती पूर्ण करण्यासाठी डेटा सामायिक करणे कायदेशीररित्या लागू करण्यायोग्य बनते. संभाव्य उल्लंघनांच्या तपासणीसह लागू सेवा अटी लागू केल्या. फसवणूक, सुरक्षा, तांत्रिक समस्यांचा शोध घ्या, प्रतिबंध करा किंवा अन्यथा हाताळा.'
                )}
              </p>

              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('MERGER', 'विलीनीकरण')}
              </h2>
              <p>
                {t(
                  'If the NGO is involved in a merger, acquisition, amalgamation, absorption, or external reconstruction including asset sale, we will continue to ensure the confidentiality of any personal information and give affected users notice before personal information is transferred or becomes subject matter of a different Privacy Policy.',
                  'संस्था विलीनीकरण, अधिग्रहण, विलीनीकरण, शोषण किंवा मालमत्ता विक्रीसह बाह्य पुनर्निर्माणात सामील असल्यास, आम्ही कोणत्याही वैयक्तिक माहितीची गोपनीयता सुनिश्चित करणे सुरू ठेवू आणि वैयक्तिक माहिती हस्तांतरित होण्यापूर्वी किंवा भिन्न गोपनीयता धोरणाचा विषय बनण्यापूर्वी प्रभावित वापरकर्त्यांना सूचना द्यू.'
                )}
              </p>

              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('PRIVACY POLICY CHANGES', 'गोपनीयता धोरण बदल')}
              </h2>
              <p>
                {t(
                  'JALJIV RAKSHAK FOUNDATION may change its Privacy Policy from time to time at its sole discretion. Though most changes may be minor in nature, may be necessitated by change in Government laws, some facts coming to light, with due passage of time. JALJIV RAKSHAK FOUNDATION expects its Visitor\'s to frequently check this page for any changes to its Privacy Policy. Visitor\'s continuous use of the site, after any change in this Privacy Policy will constitute their acceptance for the same.',
                  'JALJIV RAKSHAK FOUNDATION त्याच्या स्वत: च्या विवेकबुद्धीनुसार वेळोवेळी त्याचे गोपनीयता धोरण बदलू शकते. जरी बहुतेक बदल स्वरूपात किरकोळ असू शकतात, सरकारी कायद्यांमध्ये बदल, काही तथ्ये प्रकाशात येणे, योग्य काळाने गरजेचे असू शकतात. JALJIV RAKSHAK FOUNDATION त्याच्या गोपनीयता धोरणात कोणत्याही बदलांसाठी त्याच्या भेट देणाऱ्यांकडून वारंवार हे पृष्ठ तपासण्याची अपेक्षा करते. या गोपनीयता धोरणात कोणत्याही बदलानंतर भेट देणार्यांचा साइटचा सतत वापर त्यांच्या त्यासाठीच्या स्वीकृतीची रचना करेल.'
                )}
              </p>

              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('Contact', 'संपर्क')}
              </h2>
              <p>
                {t(
                  'For privacy-related questions, contact us at support@jaljivrakshakngo.org or (+91) 7666 7666 25.',
                  'गोपनीयतेशी संबंधित प्रश्नांसाठी support@jaljivrakshakngo.org किंवा (+91) 7666 7666 25 वर संपर्क करा.'
                )}
              </p>
            </div>
            <Button asChild className="mt-10 rounded-full font-heading">
              <Link to="/">{t('Back to Home', 'मुख्यपृष्ठावर परत')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}