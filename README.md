```mermaid
sequenceDiagram
    participant M as Maker
    participant SP as Swap Program
    participant TP as Token Program
    participant ATA as ATA Program
    participant SYS as System Program

    M->>SP: make_offer(id, amount_a, amount_b)
    SP->>SYS: Create Offer Account (PDA)
    SP->>ATA: Create Vault Account
    SP->>TP: Transfer tokens from Maker to Vault
    SP->>SP: Save offer data
    SP-->>M: Offer created successfully
```

```mermaid
sequenceDiagram
participant T as Taker
participant SP as Swap Program
participant TP as Token Program
participant O as Offer Account

    T->>SP: take_offer(offer_id)
    SP->>O: Read offer data
    SP->>TP: Transfer tokens from Taker to Maker
    SP->>TP: Transfer tokens from Vault to Taker
    SP->>SP: Close Offer Account & Vault
    SP-->>T: Swap completed successfully
```
