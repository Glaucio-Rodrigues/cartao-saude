import jsPDF from 'jspdf';

export const generatePDF = (title: string, date: string, doctor: string, additionalInfo?: string) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFillColor(0, 56, 168); // #0038a8
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Cartão Saúde", 105, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Documento Oficial", 105, 30, { align: 'center' });
  
  // Content
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(title, 20, 60);
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Data: ${date}`, 20, 75);
  doc.text(`Profissional: ${doctor}`, 20, 85);
  
  if (additionalInfo) {
    doc.text(`Informação Adicional: ${additionalInfo}`, 20, 95);
  }
  
  // Body - Mock content
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Detalhes do Documento:", 20, 115);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  const lorem = "Este é um documento gerado automaticamente com base nos dados do sistema Cartão Saúde. Todos os resultados e prescrições aqui descritos são de caráter informativo e reproduzem fielmente os dados fornecidos pelo profissional de saúde no momento do atendimento. Em caso de dúvidas, consulte o seu médico ou a unidade de saúde de origem.";
  
  const splitText = doc.splitTextToSize(lorem, 170);
  doc.text(splitText, 20, 125);
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')} pelo portal Cartão Saúde.`, 20, 280);
  
  // Save the PDF
  doc.save(`${title.replace(/\s+/g, '_').toLowerCase()}.pdf`);
};
