/**
 * Security & Sanitization Utilities for Equipage Equipment Solutions (EES)
 * Defends against XSS, injection, spam bots, and malicious input vectors.
 */

/**
 * Strips dangerous HTML tags, attributes, and script injection payloads.
 * @param {string} input 
 * @returns {string} Sanitized string
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  return input
    // Remove script tags and contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove inline event handlers (onclick, onload, onerror, etc.)
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/on\w+=\S+/gi, '')
    // Remove javascript: pseudo-protocol
    .replace(/javascript:[^"'\s]*/gi, '')
    // Strip HTML opening/closing tags
    .replace(/<\/?[^>]+(>|$)/g, '')
    // Trim whitespace
    .trim();
}

/**
 * Validates email with strict RFC compliant regex pattern.
 * @param {string} email 
 * @returns {boolean}
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim()) && email.length <= 120;
}

/**
 * Validates telephone number (supports Indian standard mobile/landlines and international formats).
 * @param {string} phone 
 * @returns {boolean}
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  // Matches 10 to 15 digits optionally prefixed with +
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(cleaned);
}

/**
 * In-memory client rate limiter to prevent spam bot flooding.
 */
const rateLimitMap = new Map();

/**
 * Checks if an action is allowed within the cooldown period.
 * @param {string} key Unique key, e.g., 'quote_form'
 * @param {number} cooldownMs Milliseconds before next submission allowed (default: 5000ms)
 * @returns {boolean} True if allowed, false if rate limited
 */
export function checkRateLimit(key = 'general', cooldownMs = 5000) {
  const now = Date.now();
  const lastTime = rateLimitMap.get(key) || 0;
  if (now - lastTime < cooldownMs) {
    return false; // Rate limited
  }
  rateLimitMap.set(key, now);
  return true;
}

/**
 * Checks if the honeypot field has been populated by an automated crawler/bot.
 * @param {string} honeypotValue 
 * @returns {boolean} True if likely a bot
 */
export function isBotSubmission(honeypotValue) {
  return typeof honeypotValue === 'string' && honeypotValue.trim().length > 0;
}
