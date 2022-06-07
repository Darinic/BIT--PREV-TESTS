CREATE TABLE IF NOT EXISTS stories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    story VARCHAR(2000) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    targetAmount INT NOT NULL,
    currentAmount INT DEFAULT 0,
    confirmed BOOL NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS funders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    amount INT NOT NULL,
    story_id INT NOT NULL,
    INDEX stor_ind (story_id),
    foreign key (story_id) references stories(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
