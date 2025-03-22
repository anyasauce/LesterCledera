function render() {
    const root = document.getElementById('root');

    const content = `
        <div class="container py-5">
        <!-- Profile Card -->
        <div class="card mb-5">
            <div class="profile-header">
                <img src="images/image.png" alt="Lester Cledera" class="profile-img rounded-circle">
            </div>
            <div class="profile-info text-center">
                <h1 class="display-5 fw-bold mb-2">Lester Cledera</h1>
                <p class="lead text-muted mb-4">Bio Here!</p>

                <!-- Skills/Tags -->
                <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
                    <span class="badge-custom bg-primary bg-opacity-10 text-primary">Trader</span>
                    <span class="badge-custom bg-info bg-opacity-10 text-info">Public Relation Officer</span>
                    <span class="badge-custom bg-success bg-opacity-10 text-success"> Influencer Connector</span>
                </div>

                <!-- Social Icons -->
                <div class="d-flex justify-content-center gap-3 mb-4">
                    <a href="https://www.facebook.com/share/16DbJLSdzW/" class="social-btn btn btn-primary shadow-sm">
                        <i class="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="https://www.instagram.com/itsmilester/" class="social-btn btn btn-danger shadow-sm">
                        <i class="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="https://t.me/itsmilester" class="social-btn btn btn-dark shadow-sm">
                        <i class="bi bi-telegram fs-4"></i>
                    </a>
                    <a href="mailto:contact@lestercledera.com" class="social-btn btn btn-info shadow-sm">
                        <i class="bi bi-envelope fs-4"></i>
                    </a>
                </div>

                <!-- Navigation Tabs -->
                <ul class="nav nav-pills justify-content-center mb-4" id="profileTabs" role="tablist">
                    <li class="nav-item mx-1" role="presentation">
                        <button class="nav-link active" id="contact-tab" data-bs-toggle="pill" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="true">
                            <i class="bi bi-person-lines-fill me-2"></i>Contact
                        </button>
                    </li>
                    <li class="nav-item mx-1" role="presentation">
                        <button class="nav-link" id="payment-tab" data-bs-toggle="pill" data-bs-target="#payment"
                            type="button" role="tab" aria-controls="payment" aria-selected="false">
                            <i class="bi bi-cash-coin me-2"></i>Payment
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Tab Content -->
        <div class="tab-content" id="profileTabsContent">
            <!-- Contact Information Tab -->
            <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="card mb-4">
                    <div class="card-body p-4">
                        <h3 class="section-title">
                            <i class="bi bi-person-rolodex fs-3 text-primary"></i>
                            Contact Information
                        </h3>

                        <div class="row g-4">
                            <!-- Contact Cards -->
                            <div class="col-md-6">
                                <div class="contact-card card border-0 bg-primary bg-opacity-10 rounded-4 h-100">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-circle bg-white shadow-sm me-3">
                                                <i class="bi bi-facebook text-primary fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="mb-0 text-muted small">Facebook</p>
                                                <p class="mb-0 fw-semibold">Lester Cledera</p>
                                            </div>
                                            <div class="ms-auto">
                                                <a href="https://www.facebook.com/share/16DbJLSdzW/" class="btn btn-sm btn-light rounded-circle">
                                                    <i class="bi bi-box-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="contact-card card border-0 bg-danger bg-opacity-10 rounded-4 h-100">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-circle bg-white shadow-sm me-3">
                                                <i class="bi bi-instagram text-danger fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="mb-0 text-muted small">Instagram</p>
                                                <p class="mb-0 fw-semibold">@itsmilester</p>
                                            </div>
                                            <div class="ms-auto">
                                                <a href="https://www.instagram.com/itsmilester/"
                                                    class="btn btn-sm btn-light rounded-circle">
                                                    <i class="bi bi-box-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="contact-card card border-0 bg-dark bg-opacity-10 rounded-4 h-100">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-circle bg-white shadow-sm me-3">
                                                <i class="bi bi-telegram text-dark fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="mb-0 text-muted small">Telegram</p>
                                                <p class="mb-0 fw-semibold">@t.me/itsmilester</p>
                                            </div>
                                            <div class="ms-auto">
                                                <a href="#" class="btn btn-sm btn-light rounded-circle">
                                                    <i class="bi bi-box-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="contact-card card border-0 bg-info bg-opacity-10 rounded-4 h-100">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-circle bg-white shadow-sm me-3">
                                                <i class="bi bi-envelope text-info fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="mb-0 text-muted small">Email</p>
                                                <p class="mb-0 fw-semibold">contact@lestercledera.com</p>
                                            </div>
                                            <div class="ms-auto">
                                                <a href="mailto:contact@lestercledera.com"
                                                    class="btn btn-sm btn-light rounded-circle">
                                                    <i class="bi bi-envelope-arrow-up"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Payment Tab -->
            <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                <div class="card mb-4">
                    <div class="card-body p-4">
                        <h3 class="section-title">
                            <i class="bi bi-qr-code fs-3 text-primary"></i>
                            GCash Payment
                        </h3>

                        <div class="row align-items-center">
                            <div class="col-lg-5 text-center mb-4 mb-lg-0">
                                <div class="qr-container d-inline-block mb-3">
                                    <img src="images/qrcode.png" alt="GCash QR Code" class="img-fluid">
                                </div>

                                <div class="alert alert-primary bg-primary bg-opacity-10 border-0 rounded-4">
                                    <i class="bi bi-info-circle me-2"></i>
                                    <span>Scan to send money via GCash</span>
                                </div>

                                <a href="images/qrcode.png" download="GCash_QR_Code.png" class="btn btn-primary mt-2">
                                    <i class="bi bi-download me-1"></i> Download QR Code
                                </a>
                            </div>

                            <div class="col-lg-7">
                                <div class="card border-0 bg-light">
                                    <div class="card-body p-4">
                                        <h5 class="fw-bold mb-3">Payment Details</h5>

                                        <div class="info-item">
                                            <span class="info-item-label">GCash Number:</span>
                                            <span class="text-dark"> 0930 400 1795</span>
                                            <i class="bi bi-clipboard ms-auto copy-button"
                                                data-clipboard="0930 400 1795"></i>
                                        </div>

                                        <div class="info-item">
                                            <span class="info-item-label">GCash Name:</span>
                                            <span class="text-dark">Lester Cledera</span>
                                            <i class="bi bi-clipboard ms-auto copy-button"
                                                data-clipboard="Lester Cledera"></i>
                                        </div>

                                        <div class="alert alert-success mt-3 mb-0">
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-shield-check fs-4 me-2"></i>
                                                <div>
                                                    <p class="fw-bold mb-0">Secure Transactions</p>
                                                    <p class="mb-0 small">All payments are secure and instant</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer text-center">
            <div class="d-flex align-items-center justify-content-center">
                <span class="text-muted">© 2025</span>
                <span class="mx-2 text-primary fw-bold">Lester Cledera</span>
                <span class="text-muted">• All rights reserved</span>
            </div>
        </div>
    </div>
    `;

    root.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', function () {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const textToCopy = this.getAttribute('data-clipboard');
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalClass = this.className;
                this.className = 'bi bi-check-circle ms-auto text-success';
                setTimeout(() => {
                    this.className = originalClass;
                }, 1500);
            });
        });
    });
});

render();