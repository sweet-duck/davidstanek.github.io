import React, { forwardRef, useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Button } from '../components/Button';
import { contacts } from '../data/contacts';

interface ContactSectionProps {
    isMobile: boolean;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
    ({ isMobile }, ref) => {
        const [formData, setFormData] = useState<FormData>({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        const [isSubmitting, setIsSubmitting] = useState(false);

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const isValidEmail = (email: string): boolean => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const sanitizeInput = (input: string): string => {
            return input
                .replace(/[<>]/g, '')
                .replace(/javascript:/gi, '')
                .trim();
        };

        const validateForm = (): boolean => {
            if (!formData.name.trim()) {
                toast.error('Jméno je povinné');
                return false;
            }

            if (!formData.email.trim()) {
                toast.error('Email je povinný');
                return false;
            }

            if (!isValidEmail(formData.email)) {
                toast.error('Neplatný formát emailu');
                return false;
            }

            if (!formData.subject.trim()) {
                toast.error('Předmět je povinný');
                return false;
            }

            if (!formData.message.trim()) {
                toast.error('Zpráva je povinná');
                return false;
            }

            if (formData.message.length > 1000) {
                toast.error('Zpráva je příliš dlouhá (max 1000 znaků)');
                return false;
            }

            return true;
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            if (!validateForm()) return;

            setIsSubmitting(true);

            try {
                const sanitizedData = {
                    from_name: sanitizeInput(formData.name),
                    from_email: sanitizeInput(formData.email),
                    subject: sanitizeInput(formData.subject),
                    message: sanitizeInput(formData.message),
                    to_name: 'Your Name'
                };

                await emailjs.send(
                    'service_wq4cnsv',
                    'template_nuj02or',
                    sanitizedData,
                    '9z5Z8XzSi1EHClNVX'
                );

                toast.success("Zpráva byla úspěšně odeslána!");
                setFormData({ name: '', email: '', subject: '', message: '' });

            } catch (error) {
                console.error('Chyba při odesílání:', error);
                toast.error('Nepodařilo se odeslat zprávu. Zkuste to prosím později.');
            } finally {
                setIsSubmitting(false);
            }
        };

        const handleContactClick = (contact: typeof contacts[0]) => {
            if (contact.href.startsWith("https://")) {
                window.open(contact.href, "_blank");
            } else if (contact.href) {
                navigator.clipboard.writeText(contact.info);
                toast.success(contact.info + " Zkopírováno do schránky!");
            }
        };

        return (
            <section ref={ref} className={`${isMobile ? 'min-h-screen py-8' : 'h-screen'} flex items-center relative`}>
                <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'}`}>
                    <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'} font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent`}>
                            Spojme se
                        </h2>
                        <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-400 max-w-3xl mx-auto`}>
                            Máte zajímavý projekt nebo nápad? Pojďme o něm mluvit!
                        </p>
                    </div>

                    <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1 gap-8' : 'lg:grid-cols-2 gap-12'}`}>
                        <div>
                            <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold mb-6`}>Napište mi</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Vaše jméno"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        maxLength={50}
                                        className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-sm'} bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-300`}
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Váš email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        maxLength={100}
                                        className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-sm'} bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-300`}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Předmět"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    maxLength={100}
                                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-sm'} bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-300`}
                                    required
                                    disabled={isSubmitting}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Vaše zpráva..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={isMobile ? 3 : 4}
                                    maxLength={1000}
                                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-sm'} bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none`}
                                    required
                                    disabled={isSubmitting}
                                />
                                <div className="text-right text-xs text-gray-500">
                                    {formData.message.length}/1000
                                </div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size={isMobile ? "small" : "medium"}
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Odesílám...' : 'Odeslat zprávu'}
                                </Button>
                            </form>
                        </div>

                        <div className="space-y-2">
                            <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold mb-6`}>Kontaktní informace</h3>

                            {contacts.map((contact) => (
                                <div
                                    key={contact.title}
                                    onClick={() => handleContactClick(contact)}
                                    className="flex items-center space-x-4 p-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300 hover:bg-white/10 cursor-pointer"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-lg overflow-hidden`}>
                                        {contact.icon.startsWith("http") ? (
                                            <img src={contact.icon} alt={contact.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span>{contact.icon}</span>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">{contact.title}</h4>
                                        <p className="text-gray-400 text-sm">{contact.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);
