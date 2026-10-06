-- 사용자 테이블
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 단어 테이블
CREATE TABLE words (
    id SERIAL PRIMARY KEY,
    day INTEGER NOT NULL CHECK (day BETWEEN 1 AND 60),
    word VARCHAR(100) NOT NULL,
    phonetic VARCHAR(100),
    pos VARCHAR(20) NOT NULL,
    meaning_primary TEXT NOT NULL,
    meaning_secondary TEXT,
    example_en TEXT NOT NULL,
    example_ko TEXT NOT NULL,
    source_tag VARCHAR(50)
);

-- 오답 및 복습 진도 테이블
CREATE TABLE user_word_progress (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    word_id INTEGER REFERENCES words(id) ON DELETE CASCADE,
    wrong_count INTEGER DEFAULT 0,
    consecutive_correct INTEGER DEFAULT 0,
    is_mastered BOOLEAN DEFAULT FALSE,
    last_reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, word_id)
);